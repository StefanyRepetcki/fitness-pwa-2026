#!/usr/bin/env node
/**
 * Script para gerar ícones PWA a partir do logo.svg
 * Requer: sharp (npm install sharp --save-dev)
 * 
 * Uso: node scripts/generate-icons-from-svg.js
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const svgPath = join(projectRoot, 'public', 'logo.svg');
const output192 = join(projectRoot, 'public', 'pwa-192x192.png');
const output512 = join(projectRoot, 'public', 'pwa-512x512.png');

async function generateIcons() {
  try {
    // Verificar se o SVG existe
    const svgBuffer = readFileSync(svgPath);
    console.log(`✅ SVG carregado: ${svgPath}`);

    // Gerar ícone 192x192
    await sharp(svgBuffer)
      .resize(192, 192, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(output192);
    console.log(`✅ Ícone gerado: ${output192} (192x192px)`);

    // Gerar ícone 512x512
    await sharp(svgBuffer)
      .resize(512, 512, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(output512);
    console.log(`✅ Ícone gerado: ${output512} (512x512px)`);

    console.log('\n🎉 Ícones PWA gerados com sucesso!');
    return true;
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND' && error.message.includes('sharp')) {
      console.error('❌ Sharp não está instalado!');
      console.error('   Instale com: npm install sharp --save-dev');
      console.error('\n💡 Alternativa: Use uma ferramenta online como:');
      console.error('   - https://realfavicongenerator.net/');
      console.error('   - https://www.pwabuilder.com/imageGenerator');
      console.error('   - Faça upload de logo.svg e gere os ícones 192x192 e 512x512');
    } else {
      console.error('❌ Erro ao processar SVG:', error.message);
    }
    return false;
  }
}

generateIcons();


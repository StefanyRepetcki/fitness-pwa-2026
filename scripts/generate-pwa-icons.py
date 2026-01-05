#!/usr/bin/env python3
"""
Script para gerar ícones PWA a partir da logo do Ciclei
Requer: pip install Pillow
"""

try:
    from PIL import Image
    import os
    import sys

    def generate_pwa_icons():
        # Caminhos
        logo_path = 'public/logo-ciclei.png'
        output_192 = 'public/pwa-192x192.png'
        output_512 = 'public/pwa-512x512.png'
        
        if not os.path.exists(logo_path):
            print(f'❌ Logo não encontrada: {logo_path}')
            print('   Por favor, certifique-se de que logo-ciclei.png está em public/')
            return False
        
        try:
            # Abrir a logo original
            logo = Image.open(logo_path)
            print(f'✅ Logo carregada: {logo.size[0]}x{logo.size[1]}px')
            
            # Converter para RGBA se necessário
            if logo.mode != 'RGBA':
                logo = logo.convert('RGBA')
            
            # Gerar ícone 192x192
            icon_192 = logo.resize((192, 192), Image.Resampling.LANCZOS)
            icon_192.save(output_192, 'PNG', optimize=True)
            print(f'✅ Ícone gerado: {output_192} (192x192px)')
            
            # Gerar ícone 512x512
            icon_512 = logo.resize((512, 512), Image.Resampling.LANCZOS)
            icon_512.save(output_512, 'PNG', optimize=True)
            print(f'✅ Ícone gerado: {output_512} (512x512px)')
            
            print('\n🎉 Ícones PWA gerados com sucesso!')
            return True
            
        except Exception as e:
            print(f'❌ Erro ao processar imagem: {e}')
            return False

    if __name__ == '__main__':
        # Mudar para o diretório do projeto
        script_dir = os.path.dirname(os.path.abspath(__file__))
        project_dir = os.path.dirname(script_dir)
        os.chdir(project_dir)
        
        generate_pwa_icons()

except ImportError:
    print('❌ Pillow não está instalado!')
    print('   Instale com: pip install Pillow')
    print('\n💡 Alternativa: Use uma ferramenta online como:')
    print('   - https://realfavicongenerator.net/')
    print('   - https://www.pwabuilder.com/imageGenerator')
    print('   - Faça upload de logo-ciclei.png e gere os ícones 192x192 e 512x512')
    sys.exit(1)


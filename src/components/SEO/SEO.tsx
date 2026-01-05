import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export const SEO = ({
  title = 'Ciclei - Seu ciclo completo de treinos e suplementos',
  description = 'Ciclei - Seu ciclo completo de treinos, suplementos e alimentação! Organize sua rotina fitness de forma divertida e eficiente.',
  keywords = 'ciclei, ciclo, treino, suplementos, vitaminas, dieta, alimentação, exercícios, PWA, app fitness, treino feminino, plano alimentar',
  ogImage = '/pwa-512x512.png',
  ogType = 'website',
  canonical
}: SEOProps) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const baseUrl = window.location.origin;
    const currentUrl = canonical || window.location.href;
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

    // Atualizar título
    document.title = title;

    // Função helper para atualizar/criar meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Meta tags básicas
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('theme-color', '#eb3157');
    updateMetaTag('robots', 'index, follow');

    // Open Graph
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', fullOgImage, 'property');
    updateMetaTag('og:image:url', fullOgImage, 'property');
    updateMetaTag('og:image:secure_url', fullOgImage, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:url', currentUrl, 'property');
    updateMetaTag('og:site_name', 'Ciclei', 'property');
    updateMetaTag('og:locale', 'pt_BR', 'property');

    // Twitter Cards
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', fullOgImage);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // Structured Data (JSON-LD)
    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredData);
    }

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Ciclei',
      description: description,
      url: baseUrl,
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        ratingCount: '1'
      },
      author: {
        '@type': 'Person',
        name: 'Stefany Repetcki'
      },
      inLanguage: 'pt-BR',
      isAccessibleForFree: true
    };

    structuredData.textContent = JSON.stringify(jsonLd);
  }, [title, description, keywords, ogImage, ogType, canonical]);

  return null;
};

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
  title = 'Fitness PWA - Treinos e Dieta',
  description = 'Organize seus treinos, dieta e estudos de exercícios. App completo para sua rotina fitness com visual elegante e feminino.',
  keywords = 'fitness, treino, dieta, alimentação, exercícios, PWA, app fitness, treino feminino',
  ogImage = '/pwa-512x512.png',
  ogType = 'website',
  canonical
}: SEOProps) => {
  useEffect(() => {
    // Atualizar título
    document.title = title;

    // Atualizar ou criar meta tags
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
    updateMetaTag('theme-color', '#F4B6C2');

    // Open Graph
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:type', ogType, 'property');
    const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:site_name', 'Fitness PWA', 'property');
    updateMetaTag('og:locale', 'pt_BR', 'property');

    // Twitter Cards
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

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
      name: 'Fitness PWA',
      description: description,
      url: typeof window !== 'undefined' ? window.location.origin : '',
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
      }
    };

    structuredData.textContent = JSON.stringify(jsonLd);
  }, [title, description, keywords, ogImage, ogType, canonical]);

  return null;
};


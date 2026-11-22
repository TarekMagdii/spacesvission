import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
     name: 'SPACES VISION', 
     short_name: 'SPACES VISION', 
     description: 'Technology, infrastructure and digital experiences.', 
     start_url: '/',
      display: 'standalone',
       background_color: '#03132f', 
       theme_color: '#03132f',
        icons: [{ src: '/favicon.svg',
           sizes: 'any', type: 'image/svg+xml' }] };
}

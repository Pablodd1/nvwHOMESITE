import os
import glob

html_files = glob.glob('*.html')
base_url = 'https://www.nvw.wine'

og_template = """
    <!-- Global SEO & Social Meta Tags -->
    <link rel="canonical" href="{url}" />
    <link rel="alternate" hreflang="en" href="{url}" />
    <link rel="alternate" hreflang="es" href="{url}" />
    <link rel="alternate" hreflang="x-default" href="{url}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{url}" />
    <meta property="og:title" content="Napa Valley Wineries | Discovery & Booking Official" />
    <meta property="og:description" content="Plan, explore, and book your perfect winery experience in Napa Valley with NVW." />
    <meta property="og:image" content="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&h=630&fit=crop" />
    <meta name="twitter:card" content="summary_large_image" />
"""

faq_schema = """
    <!-- JSON-LD Schema for AI SEO -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I book a winery tour?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can easily book a winery tour or tasting directly through our official app at https://app.nvw.wine."
          }
        },
        {
          "@type": "Question",
          "name": "What wineries are available in Napa Valley?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We feature a variety of boutique and premium wineries across Napa Valley. Visit our app to explore the full list."
          }
        }
      ]
    }
    </script>
"""

blog_schema_template = """
    <!-- JSON-LD Schema for AI SEO -->
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {{
        "@type": "WebPage",
        "@id": "{url}"
      }},
      "headline": "NVW Wine Stories & Insights",
      "image": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&h=630&fit=crop",  
      "author": {{
        "@type": "Organization",
        "name": "Napa Valley Wineries"
      }},  
      "publisher": {{
        "@type": "Organization",
        "name": "Napa Valley Wineries",
        "logo": {{
          "@type": "ImageObject",
          "url": "https://www.nvw.wine/images/nvw-logo.png"
        }}
      }},
      "datePublished": "2025-01-02",
      "dateModified": "2026-05-30"
    }}
    </script>
"""

for file_path in html_files:
    if file_path == 'index.html':
        continue 

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'hreflang="x-default"' in content:
        continue

    url = f"{base_url}/{file_path}"
    
    injection = og_template.format(url=url)
    
    if file_path == 'faqs.html':
        injection += faq_schema
    elif file_path.startswith('blog'):
        injection += blog_schema_template.format(url=url)
    
    new_content = content.replace('</head>', injection + '\n</head>', 1)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

print("SEO tags injected successfully.")

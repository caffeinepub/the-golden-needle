export interface GalleryItem {
  image: string;
  title: string;
  alt: string;
  category: 'Blouse' | 'Ghagra' | 'Dress' | 'One-Piece' | 'Kurti' | 'Saree Blouse' | 'Lehenga' | 'Gown';
}

export const galleryItems: GalleryItem[] = [
  // Original items
  {
    image: '/assets/generated/golden-needle-gallery-blouse.dim_800x800.png',
    title: 'Classic Blouse Design',
    alt: 'Custom-stitched blouse with intricate design',
    category: 'Blouse',
  },
  {
    image: '/assets/generated/golden-needle-gallery-ghagra.dim_800x800.png',
    title: 'Traditional Ghagra',
    alt: 'Elegant ghagra with traditional embellishments',
    category: 'Ghagra',
  },
  {
    image: '/assets/generated/golden-needle-gallery-dress.dim_800x800.png',
    title: 'Evening Dress',
    alt: 'Beautiful custom-tailored dress',
    category: 'Dress',
  },
  {
    image: '/assets/generated/golden-needle-gallery-onepiece.dim_800x800.png',
    title: 'Stylish One-Piece',
    alt: 'Stylish one-piece outfit with perfect fit',
    category: 'One-Piece',
  },
  
  // New Blouse items
  {
    image: '/assets/generated/golden-needle-gallery-blouse-01.dim_800x800.png',
    title: 'Designer Blouse with Embroidery',
    alt: 'Elegant designer blouse featuring intricate embroidery work',
    category: 'Blouse',
  },
  {
    image: '/assets/generated/golden-needle-gallery-blouse-02.dim_800x800.png',
    title: 'Modern Cut Blouse',
    alt: 'Contemporary blouse with modern cut and styling',
    category: 'Blouse',
  },
  {
    image: '/assets/generated/golden-needle-gallery-blouse-03.dim_800x800.png',
    title: 'Traditional Silk Blouse',
    alt: 'Traditional silk blouse with classic design elements',
    category: 'Blouse',
  },
  {
    image: '/assets/generated/golden-needle-gallery-blouse-04.dim_800x800.png',
    title: 'Festive Blouse Design',
    alt: 'Festive blouse with decorative patterns and embellishments',
    category: 'Blouse',
  },
  {
    image: '/assets/generated/golden-needle-gallery-blouse-05.dim_800x800.png',
    title: 'Elegant Back Design Blouse',
    alt: 'Blouse featuring elegant back design with detailed work',
    category: 'Blouse',
  },
  {
    image: '/assets/generated/golden-needle-gallery-blouse-06.dim_800x800.png',
    title: 'Contemporary Fashion Blouse',
    alt: 'Contemporary fashion blouse with trendy design elements',
    category: 'Blouse',
  },
  
  // New Ghagra items
  {
    image: '/assets/generated/golden-needle-gallery-ghagra-01.dim_800x800.png',
    title: 'Bridal Ghagra Collection',
    alt: 'Luxurious bridal ghagra with heavy embellishments and intricate work',
    category: 'Ghagra',
  },
  {
    image: '/assets/generated/golden-needle-gallery-ghagra-02.dim_800x800.png',
    title: 'Festive Ghagra Design',
    alt: 'Colorful festive ghagra with traditional patterns and mirror work',
    category: 'Ghagra',
  },
  {
    image: '/assets/generated/golden-needle-gallery-ghagra-03.dim_800x800.png',
    title: 'Designer Ghagra Choli',
    alt: 'Designer ghagra choli set with contemporary styling',
    category: 'Ghagra',
  },
  {
    image: '/assets/generated/golden-needle-gallery-ghagra-04.dim_800x800.png',
    title: 'Traditional Embroidered Ghagra',
    alt: 'Traditional ghagra with beautiful embroidery and sequin work',
    category: 'Ghagra',
  },
  
  // New Dress items
  {
    image: '/assets/generated/golden-needle-gallery-dress-01.dim_800x800.png',
    title: 'Elegant Evening Gown',
    alt: 'Sophisticated evening gown with flowing silhouette',
    category: 'Dress',
  },
  {
    image: '/assets/generated/golden-needle-gallery-dress-02.dim_800x800.png',
    title: 'Party Wear Dress',
    alt: 'Stylish party wear dress with modern design',
    category: 'Dress',
  },
  {
    image: '/assets/generated/golden-needle-gallery-dress-03.dim_800x800.png',
    title: 'Casual Chic Dress',
    alt: 'Comfortable casual dress with chic styling',
    category: 'Dress',
  },
  {
    image: '/assets/generated/golden-needle-gallery-dress-04.dim_800x800.png',
    title: 'Formal Occasion Dress',
    alt: 'Elegant formal dress perfect for special occasions',
    category: 'Dress',
  },
  
  // New One-Piece items
  {
    image: '/assets/generated/golden-needle-gallery-onepiece-01.dim_800x800.png',
    title: 'Designer One-Piece Outfit',
    alt: 'Trendy designer one-piece with contemporary cut',
    category: 'One-Piece',
  },
  {
    image: '/assets/generated/golden-needle-gallery-onepiece-02.dim_800x800.png',
    title: 'Casual One-Piece',
    alt: 'Comfortable casual one-piece for everyday wear',
    category: 'One-Piece',
  },
  {
    image: '/assets/generated/golden-needle-gallery-onepiece-03.dim_800x800.png',
    title: 'Formal One-Piece',
    alt: 'Sophisticated formal one-piece with elegant design',
    category: 'One-Piece',
  },
  {
    image: '/assets/generated/golden-needle-gallery-onepiece-04.dim_800x800.png',
    title: 'Party One-Piece',
    alt: 'Stylish party one-piece with modern styling',
    category: 'One-Piece',
  },
  
  // New Kurti items
  {
    image: '/assets/generated/golden-needle-gallery-kurti-01.dim_800x800.png',
    title: 'Traditional Kurti Design',
    alt: 'Classic traditional kurti with ethnic patterns',
    category: 'Kurti',
  },
  {
    image: '/assets/generated/golden-needle-gallery-kurti-02.dim_800x800.png',
    title: 'Modern Kurti Style',
    alt: 'Contemporary kurti with modern design elements',
    category: 'Kurti',
  },
  
  // New Saree Blouse items
  {
    image: '/assets/generated/golden-needle-gallery-saree-blouse-01.dim_800x800.png',
    title: 'Designer Saree Blouse',
    alt: 'Elegant designer saree blouse with intricate back design',
    category: 'Saree Blouse',
  },
  {
    image: '/assets/generated/golden-needle-gallery-saree-blouse-02.dim_800x800.png',
    title: 'Traditional Saree Blouse',
    alt: 'Traditional saree blouse with classic embroidery work',
    category: 'Saree Blouse',
  },
  
  // New Lehenga item
  {
    image: '/assets/generated/golden-needle-gallery-lehenga-01.dim_800x800.png',
    title: 'Bridal Lehenga',
    alt: 'Stunning bridal lehenga with heavy embellishments and intricate detailing',
    category: 'Lehenga',
  },
  
  // New Gown item
  {
    image: '/assets/generated/golden-needle-gallery-gown-01.dim_800x800.png',
    title: 'Elegant Evening Gown',
    alt: 'Luxurious evening gown with flowing design and elegant draping',
    category: 'Gown',
  },
];

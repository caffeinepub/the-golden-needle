import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { galleryItems, type GalleryItem } from '@/data/galleryItems';

type CategoryFilter = 'All' | 'Blouse' | 'Ghagra' | 'Other';

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [visibleCount, setVisibleCount] = useState(12);

  // Filter items based on selected category
  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Blouse') return item.category === 'Blouse' || item.category === 'Saree Blouse';
    if (selectedCategory === 'Ghagra') return item.category === 'Ghagra' || item.category === 'Lehenga';
    if (selectedCategory === 'Other') {
      return !['Blouse', 'Saree Blouse', 'Ghagra', 'Lehenga'].includes(item.category);
    }
    return false;
  });

  // Get visible items based on current count
  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  // Handle category change
  const handleCategoryChange = (category: CategoryFilter) => {
    setSelectedCategory(category);
    setVisibleCount(12); // Reset to initial count when filter changes
  };

  // Load more items
  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, filteredItems.length));
  };

  const categories: CategoryFilter[] = ['All', 'Blouse', 'Ghagra', 'Other'];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Work Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our collection of beautifully crafted garments.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => handleCategoryChange(category)}
              className={
                selectedCategory === category
                  ? 'bg-golden hover:bg-golden/90 text-golden-foreground'
                  : 'border-golden/30 hover:bg-golden/10 hover:border-golden/50'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleItems.map((item, index) => (
            <Card
              key={`${item.image}-${index}`}
              className="overflow-hidden border-border/50 hover:border-golden/50 transition-all hover:shadow-lg group"
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-card">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={handleLoadMore}
              size="lg"
              className="bg-golden hover:bg-golden/90 text-golden-foreground"
            >
              Load More ({filteredItems.length - visibleCount} remaining)
            </Button>
          </div>
        )}

        {/* No results message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No items found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

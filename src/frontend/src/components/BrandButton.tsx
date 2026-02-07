import * as React from 'react';
import { Button } from '@/components/ui/button';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Get the button variants type from the Button component
type ButtonVariantProps = VariantProps<typeof Button>;

interface BrandButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'secondary' | 'destructive';
}

export const BrandButton = React.forwardRef<HTMLButtonElement, BrandButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          variant === 'default' && 'bg-golden hover:bg-golden-dark text-golden-foreground',
          variant === 'outline' && 'border-golden text-golden hover:bg-golden/10',
          className
        )}
        variant={variant}
        {...props}
      />
    );
  }
);

BrandButton.displayName = 'BrandButton';

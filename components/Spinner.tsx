import React from 'react';
import { Loader } from 'lucide-react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const spinnerVariants = cva(
    'text-muted-foreground animate-spin text-stone-50',
    {
        variants: {
            size: {
                default: 'h-4 w-4',
                sm: 'h-2 w-2',
                lg: 'h-6 w-6',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            size: 'default',
        },
    }
);

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {}

export const Spinner: React.FC<SpinnerProps> = ({ size }) => {
    return <Loader className={cn(spinnerVariants({ size ,  } ))} />;
};


// import * as React from 'react'
// // import dynamic from 'next/dynamic';
// // import TextareaAutosize, {
// //   TextareaAutosizeProps,
// // } from 'react-textarea-autosize'

// import { cn } from '@/lib/utils'
// import dynamic from 'next/dynamic';
// import { TextareaAutosizeProps } from 'react-textarea-autosize';

// export interface TextareaProps
//   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

//   const TextareaAutosize = dynamic(() => import('react-textarea-autosize'), {
//     ssr: false,
//   });
  
//   const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaAutosizeProps>(
//     ({ className, ...props }, ref) => {
//       return (
//         <TextareaAutosize
//           className={cn(
//             'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
//             className
//           )}
//           ref={ref}
//           {...props}
//         />
//       );
//     }
//   );
  
//   Textarea.displayName = 'Textarea';
//   export { Textarea };






import React, { forwardRef, TextareaHTMLAttributes } from 'react';
import TextareaAutosize, {
  TextareaAutosizeProps,
} from 'react-textarea-autosize';

import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps & TextareaAutosizeProps
>(({ className, ...props }, ref) => {
  return (
    <TextareaAutosize
      className={cn(
        'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';

export { Textarea };

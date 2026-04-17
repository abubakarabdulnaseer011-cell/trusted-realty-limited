"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type PropertyGalleryProps = {
  title: string;
  images: string[];
};

export function PropertyGallery({ title, images }: PropertyGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#12100f]">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0.2, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.2, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Image
              src={selectedImage}
              alt={title}
              width={1600}
              height={1100}
              className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[640px]"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={cn(
              "relative overflow-hidden rounded-[1.25rem] border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b87a]/60",
              selectedImage === image ? "border-[#d8b87a]" : "border-white/10",
            )}
          >
            <Image
              src={image}
              alt={`${title} gallery image ${index + 1}`}
              width={700}
              height={520}
              className="h-36 w-full object-cover sm:h-40"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

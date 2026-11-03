"use client";

import React from 'react';

interface SponsorLogoProps {
  name: 'bri' | 'mandiri' | 'siloam' | 'pstore' | 'airalam' | 'emc' | 'calma' | 'bale';
  className?: string;
  customSrc?: string;
  height?: number;
}

export default function SponsorLogo({ name, className = "", customSrc, height = 56 }: SponsorLogoProps) {
  if (customSrc) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <img
          src={customSrc}
          alt={`Logo ${name.toUpperCase()}`}
          style={{ height: `${height}px` }}
          className="object-contain max-h-20 w-auto"
          loading="eager"
        />
      </div>
    );
  }

  switch (name) {
    // 1. BRI (HD Official Transparent PNG with Light & Dark Auto-Switch)
    case 'bri':
      return (
        <div className={`relative flex items-center justify-center select-none ${className}`}>
          <img
            src="/images/sponsors/bri.png"
            alt="Bank Rakyat Indonesia (BRI)"
            style={{ height: `${height}px` }}
            className="dark:hidden object-contain max-h-16 sm:max-h-20 w-auto drop-shadow-sm filter contrast-105"
            loading="eager"
          />
          <img
            src="/images/sponsors/bri-dark.png"
            alt="Bank Rakyat Indonesia (BRI)"
            style={{ height: `${height}px` }}
            className="hidden dark:block object-contain max-h-16 sm:max-h-20 w-auto drop-shadow-md filter contrast-105"
            loading="eager"
          />
        </div>
      );

    // 2. Bank Mandiri (HD Official Transparent PNG with Light & Dark Auto-Switch)
    case 'mandiri':
      return (
        <div className={`relative flex items-center justify-center select-none ${className}`}>
          <img
            src="/images/sponsors/mandiri.png"
            alt="Bank Mandiri"
            style={{ height: `${height}px` }}
            className="dark:hidden object-contain max-h-16 sm:max-h-20 w-auto drop-shadow-sm filter contrast-105"
            loading="eager"
          />
          <img
            src="/images/sponsors/mandiri-dark.png"
            alt="Bank Mandiri"
            style={{ height: `${height}px` }}
            className="hidden dark:block object-contain max-h-16 sm:max-h-20 w-auto drop-shadow-md filter contrast-105"
            loading="eager"
          />
        </div>
      );

    // 3. Siloam Hospitals (HD Official Transparent PNG)
    case 'siloam':
      return (
        <div className={`relative flex items-center justify-center select-none ${className}`}>
          <img
            src="/images/sponsors/siloam.png"
            alt="Siloam Hospitals"
            style={{ height: `${height}px` }}
            className="object-contain max-h-16 sm:max-h-20 w-auto drop-shadow-sm dark:drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)] filter contrast-105"
            loading="eager"
          />
        </div>
      );

    // 4. PSTORE (HD Official Transparent PNG with Light & Dark Auto-Switch - BOLD & LARGE)
    case 'pstore':
      return (
        <div className={`relative flex items-center justify-center select-none ${className}`}>
          <img
            src="/images/sponsors/pstore.png"
            alt="PSTORE"
            style={{ height: `${height}px` }}
            className="dark:hidden object-contain max-h-20 sm:max-h-24 w-auto drop-shadow-sm filter contrast-105"
            loading="eager"
          />
          <img
            src="/images/sponsors/pstore-dark.png"
            alt="PSTORE"
            style={{ height: `${height}px` }}
            className="hidden dark:block object-contain max-h-20 sm:max-h-24 w-auto drop-shadow-md filter contrast-105"
            loading="eager"
          />
        </div>
      );

    // 5. AirAlam (HD Official Transparent PNG)
    case 'airalam':
      return (
        <div className={`relative flex items-center justify-center select-none ${className}`}>
          <img
            src="/images/sponsors/airalam.png"
            alt="AirAlam"
            style={{ height: `${height}px` }}
            className="object-contain max-h-14 sm:max-h-16 w-auto drop-shadow-sm dark:drop-shadow-[0_2px_12px_rgba(2,132,199,0.35)] filter contrast-105"
            loading="eager"
          />
        </div>
      );

    // 6. RS EMC Pekayon (HD Official Transparent PNG)
    case 'emc':
      return (
        <div className={`relative flex items-center justify-center select-none ${className}`}>
          <img
            src="/images/sponsors/emc.png"
            alt="RS EMC Pekayon"
            style={{ height: `${height}px` }}
            className="dark:hidden object-contain max-h-14 sm:max-h-16 w-auto drop-shadow-sm filter contrast-105"
            loading="eager"
          />
          <img
            src="/images/sponsors/emc.png"
            alt="RS EMC Pekayon"
            style={{ height: `${height}px` }}
            className="hidden dark:block object-contain max-h-14 sm:max-h-16 w-auto drop-shadow-md filter brightness-125 contrast-110"
            loading="eager"
          />
        </div>
      );

    // 7. bale (HD Official Transparent PNG)
    case 'bale':
      return (
        <div className={`relative flex items-center justify-center select-none ${className}`}>
          <img
            src="/images/sponsors/bale.png"
            alt="balé"
            style={{ height: `${height}px` }}
            className="object-contain max-h-16 sm:max-h-20 w-auto drop-shadow-sm filter contrast-105"
            loading="eager"
          />
        </div>
      );

    // 8. CALMA (HD Official Transparent PNG with Light & Dark Auto-Switch - BOLD & LARGE)
    case 'calma':
      return (
        <div className={`relative flex items-center justify-center select-none ${className}`}>
          <img
            src="/images/sponsors/calma.png"
            alt="CALMA Official Apparel"
            style={{ height: `${height}px` }}
            className="dark:hidden object-contain max-h-20 sm:max-h-24 w-auto drop-shadow-sm filter contrast-105"
            loading="eager"
          />
          <img
            src="/images/sponsors/calma-dark.png"
            alt="CALMA Official Apparel"
            style={{ height: `${height}px` }}
            className="hidden dark:block object-contain max-h-20 sm:max-h-24 w-auto drop-shadow-md filter contrast-105"
            loading="eager"
          />
        </div>
      );

    default:
      return null;
  }
}




import React,{useState} from 'react';
import { View } from 'react-native';
import {
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';

// --------------------- Banner Ad ---------------------
export const AdBanner: React.FC = () => {
 
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
        
        zIndex: 999, // ensure it's on top
      }}
    >
     
       {/* <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      /> */}
       <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.ADAPTIVE_BANNER} // Adaptive is faster and responsive
        requestOptions={{ requestNonPersonalizedAdsOnly: true }}
      />
    </View>
  );
};

// ---------------- Interstitial Ad --------------------

export const showInterstitialAd = () => {
  const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

 
  const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
    interstitial.show();
    unsubscribe(); 
  });

  
  interstitial.load();
};

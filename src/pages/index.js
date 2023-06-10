import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import UltimateFeatures from 'sections/ultimate-features';
import Features from 'sections/features';
import IntroVideo from 'sections/intro-video';
import UsefulFeatures from 'sections/useful-features';
import Pricing from 'sections/pricing';
import Faq from 'sections/faq';
import Lecturer from 'sections/lecturer';
import Admin from 'sections/admin';
import Student from 'sections/student';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Startup Landing 010" />
        <Banner />
        <UltimateFeatures />
        <Features />
        <IntroVideo />
        <UsefulFeatures />
        <Student />
        <Lecturer />
        <Admin />
        <Pricing />
        <Faq />
      </Layout>
    </ThemeProvider>
  );
}

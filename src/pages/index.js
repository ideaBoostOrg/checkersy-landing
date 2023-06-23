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
import Lecturer from 'sections/lecturer';
import Admin from 'sections/admin';
import Student from 'sections/student';
import About from 'sections/about';
import Product from 'sections/product';
import Featureset from 'sections/featureset';
import CallToAction from 'sections/call-to-action';


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Checkersy" />
        <Banner />
        <About />
        <Product />
        {/* <UltimateFeatures />
        <Features />
        <IntroVideo />
        <UsefulFeatures /> */}
        {/* <Student />
        <Lecturer />
        <Admin /> */}
        <Featureset />
        {/* <Pricing /> */}
        <CallToAction/>
      </Layout>
    </ThemeProvider>
  );
}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

// common
import { HeaderComponent } from './common/headers/header/header.component';
import { HeaderTwoComponent } from './common/headers/header-two/header-two.component';
import { MegaMenuComponent } from './common/headers/mega-menu/mega-menu.component';
import { NavMenuComponent } from './common/headers/nav-menu/nav-menu.component';
import { FooterWithBgComponent } from './common/footers/footer-with-bg/footer-with-bg.component';
import { HeaderThreeComponent } from './common/headers/header-three/header-three.component';
import { FooterComponent } from './common/footers/footer/footer.component';
import { FooterThreeComponent } from './common/footers/footer-three/footer-three.component';
import { HeaderEightComponent } from './common/headers/header-eight/header-eight.component';
import { FooterTwoComponent } from './common/footers/footer-two/footer-two.component';
import { FooterFourComponent } from './common/footers/footer-four/footer-four.component';
import { FooterSixComponent } from './common/footers/footer-six/footer-six.component';
import { FooterFiveComponent } from './common/footers/footer-five/footer-five.component';
import { FooterSevenComponent } from './common/footers/footer-seven/footer-seven.component';
import { FooterEightComponent } from './common/footers/footer-eight/footer-eight.component';
import { HeaderTwelveComponent } from './common/headers/header-twelve/header-twelve.component';
import { HeaderThirteenComponent } from './common/headers/header-thirteen/header-thirteen.component';
import { FooterNineComponent } from './common/footers/footer-nine/footer-nine.component';
import { HeaderFourteenComponent } from './common/headers/header-fourteen/header-fourteen.component';

// home component
import { HomeMainComponent } from './home/home-main/home-main.component';
import { HeroAreaComponent } from './home/hero-area/hero-area.component';
import { FeatureOneComponent } from './home/feature-one/feature-one.component';
import { FeatureTwoComponent } from './home/feature-two/feature-two.component';
import { FeatureThreeComponent } from './home/feature-three/feature-three.component';
import { UseableToolsComponent } from './home/useable-tools/useable-tools.component';
import { FancyBannerComponent } from './home/fancy-banner/fancy-banner.component';
import { FaqAreaComponent } from './home/faq-area/faq-area.component';

// event organizer
import { EventOrganizerMainComponent } from './event-organizer/event-organizer-main/event-organizer-main.component';
import { HeroBannerComponent } from './event-organizer/hero-banner/hero-banner.component';
import { TextBlockComponent } from './event-organizer/text-block/text-block.component';
import { FancyFeatureComponent } from './event-organizer/fancy-feature/fancy-feature.component';
import { TextBlockTwoComponent } from './event-organizer/text-block-two/text-block-two.component';
import { PricingComponent } from './event-organizer/pricing/pricing.component';
import { TestimonialComponent } from './event-organizer/testimonial/testimonial.component';
import { FaqsComponent } from './event-organizer/faqs/faqs.component';
import { ShortBannerComponent } from './event-organizer/short-banner/short-banner.component';

// doc landing
import { DocLandingMainComponent } from './doc-landing/doc-landing-main/doc-landing-main.component';
import { HeroBannerThreeComponent } from './doc-landing/hero-banner-three/hero-banner-three.component';
import { FeatureFourComponent } from './doc-landing/feature-four/feature-four.component';
import { TextBlockFourComponent } from './doc-landing/text-block-four/text-block-four.component';
import { TextBlockFiveComponent } from './doc-landing/text-block-five/text-block-five.component';
import { TestimonialTwoComponent } from './doc-landing/testimonial-two/testimonial-two.component';
import { UseableToolsTwoComponent } from './doc-landing/useable-tools-two/useable-tools-two.component';
import { FaqTwoComponent } from './doc-landing/faq-two/faq-two.component';
import { ShortBannerTwoComponent } from './doc-landing/short-banner-two/short-banner-two.component';

// customer support
import { CustomerSupportMainComponent } from './customer-support/customer-support-main/customer-support-main.component';
import { HeaderFourComponent } from './common/headers/header-four/header-four.component';
import { HeroBannerFourComponent } from './customer-support/hero-banner-four/hero-banner-four.component';
import { FeatureFiveComponent } from './customer-support/feature-five/feature-five.component';
import { TextBlockSixComponent } from './customer-support/text-block-six/text-block-six.component';
import { CounterOneComponent } from './customer-support/counter-one/counter-one.component';
import { TextBlockSevenComponent } from './customer-support/text-block-seven/text-block-seven.component';
import { TextBlockEightComponent } from './customer-support/text-block-eight/text-block-eight.component';
import { UseableToolsThreeComponent } from './customer-support/useable-tools-three/useable-tools-three.component';
import { TestimonialThreeComponent } from './customer-support/testimonial-three/testimonial-three.component';
import { ShortBannerThreeComponent } from './customer-support/short-banner-three/short-banner-three.component';

// Product LandingMain
import { ProductLandingMainComponent } from './product-landing/product-landing-main/product-landing-main.component';
import { HeaderFiveComponent } from './common/headers/header-five/header-five.component';
import { HeroBannerFiveComponent } from './product-landing/hero-banner-five/hero-banner-five.component';
import { ContactModalComponent } from './common/modals/contact-modal/contact-modal.component';
import { FeatureSixComponent } from './product-landing/feature-six/feature-six.component';
import { TextBlockNineComponent } from './product-landing/text-block-nine/text-block-nine.component';
import { VideoModalComponent } from './common/modals/video-modal/video-modal.component';
import { CounterTwoComponent } from './product-landing/counter-two/counter-two.component';
import { FeatureSevenComponent } from './product-landing/feature-seven/feature-seven.component';
import { PricingOneComponent } from './product-landing/pricing-one/pricing-one.component';
import { TestimonialFourComponent } from './product-landing/testimonial-four/testimonial-four.component';
import { ShortBannerFourComponent } from './product-landing/short-banner-four/short-banner-four.component';

// Product Landing Dark
import { ProductLandingDarkMainComponent } from './product-landing-dark/product-landing-dark-main/product-landing-dark-main.component';
import { HeaderSixComponent } from './common/headers/header-six/header-six.component';
import { HeroBannerSixComponent } from './product-landing-dark/hero-banner-six/hero-banner-six.component';
import { FeatureEightComponent } from './product-landing-dark/feature-eight/feature-eight.component';
import { FeatureNineComponent } from './product-landing-dark/feature-nine/feature-nine.component';
import { FeatureTenComponent } from './product-landing-dark/feature-ten/feature-ten.component';
import { PortfolioOneComponent } from './product-landing-dark/portfolio-one/portfolio-one.component';
import { TestimonialFiveComponent } from './product-landing-dark/testimonial-five/testimonial-five.component';
import { PricingTwoComponent } from './product-landing-dark/pricing-two/pricing-two.component';
import { ShortBannerFiveComponent } from './product-landing-dark/short-banner-five/short-banner-five.component';

// pipe
import { SafePipe } from './pipe/safe.pipe';

// note taking
import { NoteTakingMainComponent } from './note-taking/note-taking-main/note-taking-main.component';
import { HeaderSevenComponent } from './common/headers/header-seven/header-seven.component';
import { HeroBannerSevenComponent } from './note-taking/hero-banner-seven/hero-banner-seven.component';
import { FeatureElevenComponent } from './note-taking/feature-eleven/feature-eleven.component';
import { FeatureTwelveComponent } from './note-taking/feature-twelve/feature-twelve.component';
import { TextBlockTenComponent } from './note-taking/text-block-ten/text-block-ten.component';
import { FeatureThirteenComponent } from './note-taking/feature-thirteen/feature-thirteen.component';
import { PricingThreeComponent } from './note-taking/pricing-three/pricing-three.component';
import { TestimonialSixComponent } from './note-taking/testimonial-six/testimonial-six.component';
import { ShortBannerSixComponent } from './note-taking/short-banner-six/short-banner-six.component';

// video editor
import { VideoEditorMainComponent } from './video-editor/video-editor-main/video-editor-main.component';
import { HeroBannerEightComponent } from './video-editor/hero-banner-eight/hero-banner-eight.component';
import { FeatureFourteenComponent } from './video-editor/feature-fourteen/feature-fourteen.component';
import { FeatureFifteenComponent } from './video-editor/feature-fifteen/feature-fifteen.component';
import { FeatureSixteenComponent } from './video-editor/feature-sixteen/feature-sixteen.component';
import { FeatureSeventeenComponent } from './video-editor/feature-seventeen/feature-seventeen.component';
import { TestimonialSevenComponent } from './video-editor/testimonial-seven/testimonial-seven.component';
import { ShortBannerSevenComponent } from './video-editor/short-banner-seven/short-banner-seven.component';

// appointment scheduling
import { AppointmentSchedulingMainComponent } from './appointment-scheduling/appointment-scheduling-main/appointment-scheduling-main.component';
import { HeaderNineComponent } from './common/headers/header-nine/header-nine.component';
import { HeroBannerNineComponent } from './appointment-scheduling/hero-banner-nine/hero-banner-nine.component';
import { FeatureEighteenComponent } from './appointment-scheduling/feature-eighteen/feature-eighteen.component';
import { FeatureNineteenComponent } from './appointment-scheduling/feature-nineteen/feature-nineteen.component';
import { FeatureTwentyComponent } from './appointment-scheduling/feature-twenty/feature-twenty.component';
import { TestimonialEightComponent } from './appointment-scheduling/testimonial-eight/testimonial-eight.component';
import { PartnersComponent } from './appointment-scheduling/partners/partners.component';
import { ShortBannerEightComponent } from './appointment-scheduling/short-banner-eight/short-banner-eight.component';
// mobile app components
import { MobileAppMainComponent } from './mobile-app/mobile-app-main/mobile-app-main.component';
import { HeaderTenComponent } from './common/headers/header-ten/header-ten.component';
import { HeroBannerTenComponent } from './mobile-app/hero-banner-ten/hero-banner-ten.component';
import { AppScreenComponent } from './mobile-app/app-screen/app-screen.component';
import { FeatureTwentyOneComponent } from './mobile-app/feature-twenty-one/feature-twenty-one.component';
import { FeatureTwentyTwoComponent } from './mobile-app/feature-twenty-two/feature-twenty-two.component';
import { AppScreenTwoComponent } from './mobile-app/app-screen-two/app-screen-two.component';
import { PricingFourComponent } from './mobile-app/pricing-four/pricing-four.component';
import { TestimonialNineComponent } from './mobile-app/testimonial-nine/testimonial-nine.component';
import { PartnersTwoComponent } from './mobile-app/partners-two/partners-two.component';
import { ShortBannerNineComponent } from './mobile-app/short-banner-nine/short-banner-nine.component';

//  doc signature
import { DocSignatureMainComponent } from './doc-signature/doc-signature-main/doc-signature-main.component';
import { HeaderElevenComponent } from './common/headers/header-eleven/header-eleven.component';
import { HeroBannerElevenComponent } from './doc-signature/hero-banner-eleven/hero-banner-eleven.component';
import { FeatureTwentyThreeComponent } from './doc-signature/feature-twenty-three/feature-twenty-three.component';
import { FeatureTwentyFourComponent } from './doc-signature/feature-twenty-four/feature-twenty-four.component';
import { VideoBoxComponent } from './doc-signature/video-box/video-box.component';
import { TextBlockElevenComponent } from './doc-signature/text-block-eleven/text-block-eleven.component';
import { UseableToolsFourComponent } from './doc-signature/useable-tools-four/useable-tools-four.component';
import { FeatureTwentyFiveComponent } from './doc-signature/feature-twenty-five/feature-twenty-five.component';
import { PricingFiveComponent } from './doc-signature/pricing-five/pricing-five.component';
import { FaqThreeComponent } from './doc-signature/faq-three/faq-three.component';
import { ShortBannerTenComponent } from './doc-signature/short-banner-ten/short-banner-ten.component';

//  website builder
import { WebsiteBuilderMainComponent } from './website-builder/website-builder-main/website-builder-main.component';
import { HeroBannerTwelveComponent } from './website-builder/hero-banner-twelve/hero-banner-twelve.component';
import { CounterThreeComponent } from './website-builder/counter-three/counter-three.component';
import { FeatureTwentySixComponent } from './website-builder/feature-twenty-six/feature-twenty-six.component';
import { FeatureTwentySevenComponent } from './website-builder/feature-twenty-seven/feature-twenty-seven.component';
import { FeatureTwentyEightComponent } from './website-builder/feature-twenty-eight/feature-twenty-eight.component';
import { ShortBannerElevenComponent } from './website-builder/short-banner-eleven/short-banner-eleven.component';

//  form survey
import { FormSurveyMainComponent } from './form-survey/form-survey-main/form-survey-main.component';
import { HeroBannerThirteenComponent } from './form-survey/hero-banner-thirteen/hero-banner-thirteen.component';
import { FeatureTwentyNineComponent } from './form-survey/feature-twenty-nine/feature-twenty-nine.component';
import { TextBlockTwelveComponent } from './form-survey/text-block-twelve/text-block-twelve.component';
import { FeatureSliderComponent } from './form-survey/feature-slider/feature-slider.component';
import { TextBlockThirteenComponent } from './form-survey/text-block-thirteen/text-block-thirteen.component';
import { IntegratedAppsComponent } from './form-survey/integrated-apps/integrated-apps.component';
import { TestimonialTenComponent } from './form-survey/testimonial-ten/testimonial-ten.component';
import { PricingSixComponent } from './form-survey/pricing-six/pricing-six.component';
import { BlogAreaComponent } from './form-survey/blog-area/blog-area.component';
import { ShortBannerTwelveComponent } from './form-survey/short-banner-twelve/short-banner-twelve.component';
import { VrLandingMainComponent } from './vr-landing/vr-landing-main/vr-landing-main.component';
import { HeroBannerFourteenComponent } from './vr-landing/hero-banner-fourteen/hero-banner-fourteen.component';
import { FeatureThirtyComponent } from './vr-landing/feature-thirty/feature-thirty.component';
import { FeatureThirtyOneComponent } from './vr-landing/feature-thirty-one/feature-thirty-one.component';
import { CounterFourComponent } from './vr-landing/counter-four/counter-four.component';
import { VideoBoxTwoComponent } from './vr-landing/video-box-two/video-box-two.component';
import { FeatureThirtyTwoComponent } from './vr-landing/feature-thirty-two/feature-thirty-two.component';
import { TestimonialElevenComponent } from './vr-landing/testimonial-eleven/testimonial-eleven.component';
import { FeatureThirtyThreeComponent } from './vr-landing/feature-thirty-three/feature-thirty-three.component';

// coming soon
import { CoomingSoonComponent } from './cooming-soon/cooming-soon.component';

// portfolio v1
import { PortfolioV1MainComponent } from './portfolio-v1/portfolio-v1-main/portfolio-v1-main.component';
import { PortfolioHeroComponent } from './portfolio-v1/portfolio-hero/portfolio-hero.component';
import { PortfolioV1AreaComponent } from './portfolio-v1/portfolio-v1-area/portfolio-v1-area.component';
import { ImagePopupComponent } from './common/modals/image-popup/image-popup.component';

// portfolio v2
import { PortfolioV2MainComponent } from './portfolio-v2/portfolio-v2-main/portfolio-v2-main.component';
import { PortfolioHeroTwoComponent } from './portfolio-v2/portfolio-hero-two/portfolio-hero-two.component';
import { PortfolioV2AreaComponent } from './portfolio-v2/portfolio-v2-area/portfolio-v2-area.component';

// portfolio v3
import { PortfolioV3MainComponent } from './portfolio-v3/portfolio-v3-main/portfolio-v3-main.component';
import { PortfolioHeroThreeComponent } from './portfolio-v3/portfolio-hero-three/portfolio-hero-three.component';
import { PortfolioV3AreaComponent } from './portfolio-v3/portfolio-v3-area/portfolio-v3-area.component';

// portfolio v4
import { PortfolioV4MainComponent } from './portfolio-v4/portfolio-v4-main/portfolio-v4-main.component';
import { PortfolioHeroFourComponent } from './portfolio-v4/portfolio-hero-four/portfolio-hero-four.component';
import { PortfolioV4AreaComponent } from './portfolio-v4/portfolio-v4-area/portfolio-v4-area.component';

// portfolio v5
import { PortfolioV5MainComponent } from './portfolio-v5/portfolio-v5-main/portfolio-v5-main.component';
import { PortfolioHeroFiveComponent } from './portfolio-v5/portfolio-hero-five/portfolio-hero-five.component';
import { PortfolioV5AreaComponent } from './portfolio-v5/portfolio-v5-area/portfolio-v5-area.component';

// portfolio-details
import { PortfolioDetailsMainComponent } from './portfolio-details/portfolio-details-main/portfolio-details-main.component';
import { PortfolioDetailsAreaComponent } from './portfolio-details/portfolio-details-area/portfolio-details-area.component';

// dynamic portfolio details
import { DynamicPDetailsComponent } from './dynamic-p-details/dynamic-p-details.component';

// about us cs
import { AboutUsCsMainComponent } from './about-us-cs/about-us-cs-main/about-us-cs-main.component';
import { AboutHeroComponent } from './about-us-cs/about-hero/about-hero.component';
import { TextBlockFourteenComponent } from './about-us-cs/text-block-fourteen/text-block-fourteen.component';
import { AboutCounterComponent } from './about-us-cs/about-counter/about-counter.component';
import { TextBlockFifteenComponent } from './about-us-cs/text-block-fifteen/text-block-fifteen.component';
import { FeatureThirtyFourComponent } from './about-us-cs/feature-thirty-four/feature-thirty-four.component';
import { AboutTeamComponent } from './about-us-cs/about-team/about-team.component';

// about us event
import { AboutUsEventMainComponent } from './about-us-event/about-us-event-main/about-us-event-main.component';
import { TextBlockSixteenComponent } from './about-us-event/text-block-sixteen/text-block-sixteen.component';
import { AboutCounterTwoComponent } from './about-us-event/about-counter-two/about-counter-two.component';
import { AboutTeamTwoComponent } from './about-us-event/about-team-two/about-team-two.component';
import { FeatureBlogComponent } from './about-us-event/feature-blog/feature-blog.component';

// about management
import { AboutManagementMainComponent } from './about-us-management/about-management-main/about-management-main.component';
import { AboutHeroThreeComponent } from './about-us-management/about-hero-three/about-hero-three.component';
import { TextBlockSeventeenComponent } from './about-us-management/text-block-seventeen/text-block-seventeen.component';
import { AboutCounterThreeComponent } from './about-us-management/about-counter-three/about-counter-three.component';
import { TextBlockEighteenComponent } from './about-us-management/text-block-eighteen/text-block-eighteen.component';
import { TextBlockNineteenComponent } from './about-us-management/text-block-nineteen/text-block-nineteen.component';
import { AboutTeamThreeComponent } from './about-us-management/about-team-three/about-team-three.component';
import { AboutBlogAreaComponent } from './about-us-management/about-blog-area/about-blog-area.component';

// about doc
import { AboutUsDocMainComponent } from './about-us-doc/about-us-doc-main/about-us-doc-main.component';
import { AboutHeroFourComponent } from './about-us-doc/about-hero-four/about-hero-four.component';
import { TextBlockTwentyComponent } from './about-us-doc/text-block-twenty/text-block-twenty.component';
import { AboutCounterFourComponent } from './about-us-doc/about-counter-four/about-counter-four.component';
import { AboutTeamFourComponent } from './about-us-doc/about-team-four/about-team-four.component';
import { UseableToolsFiveComponent } from './about-us-doc/useable-tools-five/useable-tools-five.component';
import { MapAreaComponent } from './about-us-doc/map-area/map-area.component';

//  team v1
import { TeamV1MainComponent } from './team-v1/team-v1-main/team-v1-main.component';
import { TeamV1HeroComponent } from './team-v1/team-v1-hero/team-v1-hero.component';
import { TeamAreaComponent } from './team-v1/team-area/team-area.component';
import { TeamBannerComponent } from './team-v1/team-banner/team-banner.component';

//  team v2
import { TeamV2MainComponent } from './team-v2/team-v2-main/team-v2-main.component';
import { TeamV2HeroComponent } from './team-v2/team-v2-hero/team-v2-hero.component';
import { TeamBannerTwoComponent } from './team-v2/team-banner-two/team-banner-two.component';

// team details
import { TeamDetailsComponent } from './team-details/team-details.component';
import { DynamicTeamDetailsComponent } from './dynamic-team-details/dynamic-team-details.component';

// pricing cs
import { PricingCsMainComponent } from './pricing-cs/pricing-cs-main/pricing-cs-main.component';
import { PricingAreaComponent } from './pricing-cs/pricing-area/pricing-area.component';
import { TextBlockTwentyOneComponent } from './pricing-cs/text-block-twenty-one/text-block-twenty-one.component';
import { UseableToolsSixComponent } from './pricing-cs/useable-tools-six/useable-tools-six.component';
import { PricingFaqComponent } from './pricing-cs/pricing-faq/pricing-faq.component';

// pricing event
import { PricingEventMainComponent } from './pricing-event/pricing-event-main/pricing-event-main.component';
import { PricingAreaTwoComponent } from './pricing-event/pricing-area-two/pricing-area-two.component';
import { PricingFaqTwoComponent } from './pricing-event/pricing-faq-two/pricing-faq-two.component';

// pricing management
import { PricingManagementMainComponent } from './pricing-management/pricing-management-main/pricing-management-main.component';
import { PricingAreaThreeComponent } from './pricing-management/pricing-area-three/pricing-area-three.component';
import { PricingCounterComponent } from './pricing-management/pricing-counter/pricing-counter.component';
import { TextBlockTwentyTwoComponent } from './pricing-management/text-block-twenty-two/text-block-twenty-two.component';

// contact us cs
import { ContactUsCsMainComponent } from './contact-us-cs/contact-us-cs-main/contact-us-cs-main.component';
import { ContactHeroComponent } from './contact-us-cs/contact-hero/contact-hero.component';
import { ContactStyleComponent } from './contact-us-cs/contact-style/contact-style.component';

// contact us event
import { ContactUsEventComponent } from './contact-us-event/contact-us-event.component';

// contact us management
import { ContactUsManagementComponent } from './contact-us-management/contact-us-management.component';

// contact us doc
import { ContactUsDocComponent } from './contact-us-doc/contact-us-doc.component';

// services-v1
import { ServicesV1Component } from './services-v1/services-v1.component';
// services-v2
import { ServicesV2Component } from './services-v2/services-v2.component';
// services v3
import { ServicesV3Component } from './services-v3/services-v3.component';
// services v4
import { ServicesV4Component } from './services-v4/services-v4.component';
// service details
import { ServiceDetailsComponent } from './service-details/service-details.component';
// dynamic service details
import { DynamicServiceDetailsComponent } from './dynamic-service-details/dynamic-service-details.component';
// solution management
import { SolutionManagementComponent } from './solution-management/solution-management.component';
// product-cs
import { ProductCsComponent } from './product-cs/product-cs.component';
// feature cs
import { FeatureCsComponent } from './feature-cs/feature-cs.component';
// faqs
import { FaqPageComponent } from './faq-page/faq-page.component';
import { FaqHeroAreaComponent } from './faq-page/faq-hero-area/faq-hero-area.component';
// faq details
import { FaqDetailsComponent } from './faq-details/faq-details.component';
// dynamic faqs
import { DynamicFaqDetailsComponent } from './dynamic-faq-details/dynamic-faq-details.component';
// terms condition
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
// LoginPageComponent
import { LoginPageComponent } from './login-page/login-page.component';
// register
import { RegisterPageComponent } from './register-page/register-page.component';
// error page
import { ErrorPageComponent } from './error-page/error-page.component';
// blog v1
import { BlogV1Component } from './blog-v1/blog-v1.component';
import { BlogHeroComponent } from './blog-v1/blog-hero/blog-hero.component';
// blog v2
import { BlogV2Component } from './blog-v2/blog-v2.component';
import { BlogSidebarComponent } from './blog-v2/blog-sidebar/blog-sidebar.component';
// blog v3
import { BlogV3Component } from './blog-v3/blog-v3.component';
// blog v4
import { BlogV4Component } from './blog-v4/blog-v4.component';
// blog details
import { BlogDetailsComponent } from './blog-details/blog-details.component';
// DynamicBlogDetailsComponent
import { DynamicBlogDetailsComponent } from './dynamic-blog-details/dynamic-blog-details.component';
// doc-fullwidth
import { DocFullwidthComponent } from './doc-fullwidth/doc-fullwidth.component';
import { DocAreaComponent } from './doc-fullwidth/doc-area/doc-area.component';
// doc-fullwidth banner
import { DocFullwidthBannerComponent } from './doc-fullwidth-banner/doc-fullwidth-banner.component';
// doc box
import { DocBoxComponent } from './doc-box/doc-box.component';
import { DocBoxAreaComponent } from './doc-box/doc-box-area/doc-box-area.component';
// doc box banner
import { DocBoxBannerComponent } from './doc-box-banner/doc-box-banner.component';
// changelog
import { ChangelogComponent } from './changelog/changelog.component';

@NgModule({
    imports: [
        CommonModule,
        SwiperModule,
        FormsModule,
        RouterModule,
        // BrowserModule,
    ],
    declarations: [
        // pipe
        SafePipe,
        // common components
        HeaderComponent,
        HeaderTwoComponent,
        MegaMenuComponent,
        NavMenuComponent,
        HeaderThreeComponent,
        FooterComponent,
        FooterThreeComponent,
        HeaderFourComponent,
        FooterFourComponent,
        HeaderFiveComponent,
        ContactModalComponent,
        VideoModalComponent,
        FooterFiveComponent,
        HeaderSixComponent,
        FooterTwoComponent,
        FooterSixComponent,
        HeaderSevenComponent,
        FooterEightComponent,
        FooterSevenComponent,
        HeaderEightComponent,
        HeaderNineComponent,
        HeaderTenComponent,
        HeaderElevenComponent,
        HeaderTwelveComponent,
        HeaderThirteenComponent,
        FooterNineComponent,
        HeaderFourteenComponent,
        FooterWithBgComponent,

        // home components
        HomeMainComponent,
        HeroAreaComponent,
        FeatureOneComponent,
        FeatureTwoComponent,
        FeatureThreeComponent,
        UseableToolsComponent,
        FancyBannerComponent,
        FaqAreaComponent,

        // event organizer components
        EventOrganizerMainComponent,
        HeroBannerComponent,
        TextBlockComponent,
        FancyFeatureComponent,
        TextBlockTwoComponent,
        PricingComponent,
        TestimonialComponent,
        FaqsComponent,
        ShortBannerComponent,

        // event organizers components
        DocLandingMainComponent,
        HeroBannerThreeComponent,
        FeatureFourComponent,
        TextBlockFourComponent,
        TextBlockFiveComponent,
        TestimonialTwoComponent,
        UseableToolsTwoComponent,
        FaqTwoComponent,
        ShortBannerTwoComponent,

        // customer supports components
        CustomerSupportMainComponent,
        HeroBannerFourComponent,
        FeatureFiveComponent,
        TextBlockSixComponent,
        CounterOneComponent,
        TextBlockSevenComponent,
        TextBlockEightComponent,
        UseableToolsThreeComponent,
        TestimonialThreeComponent,
        ShortBannerThreeComponent,

        // product components
        ProductLandingMainComponent,
        HeroBannerFiveComponent,
        FeatureSixComponent,
        TextBlockNineComponent,
        CounterTwoComponent,
        FeatureSevenComponent,
        PricingOneComponent,
        TestimonialFourComponent,
        ShortBannerFourComponent,

        //  product landing dark components
        ProductLandingDarkMainComponent,
        HeroBannerSixComponent,
        FeatureEightComponent,
        FeatureNineComponent,
        FeatureTenComponent,
        PortfolioOneComponent,
        TestimonialFiveComponent,
        PricingTwoComponent,
        ShortBannerFiveComponent,

        //  note taking components
        NoteTakingMainComponent,
        HeroBannerSevenComponent,
        FeatureElevenComponent,
        FeatureTwelveComponent,
        TextBlockTenComponent,
        FeatureThirteenComponent,
        PricingThreeComponent,
        TestimonialSixComponent,
        ShortBannerSixComponent,

        // video editor components
        VideoEditorMainComponent,
        HeroBannerEightComponent,
        FeatureFourteenComponent,
        FeatureFifteenComponent,
        FeatureSixteenComponent,
        FeatureSeventeenComponent,
        TestimonialSevenComponent,
        ShortBannerSevenComponent,

        //  appointment scheduling components
        AppointmentSchedulingMainComponent,
        HeroBannerNineComponent,
        FeatureEighteenComponent,
        FeatureNineteenComponent,
        FeatureTwentyComponent,
        TestimonialEightComponent,
        PartnersComponent,
        ShortBannerEightComponent,

        //mobile app
        MobileAppMainComponent,
        HeroBannerTenComponent,
        AppScreenComponent,
        FeatureTwentyOneComponent,
        FeatureTwentyTwoComponent,
        AppScreenTwoComponent,
        PricingFourComponent,
        TestimonialNineComponent,
        PartnersTwoComponent,
        ShortBannerNineComponent,

        //  doc signature
        DocSignatureMainComponent,
        HeroBannerElevenComponent,
        FeatureTwentyThreeComponent,
        FeatureTwentyFourComponent,
        VideoBoxComponent,
        TextBlockElevenComponent,
        UseableToolsFourComponent,
        FeatureTwentyFiveComponent,
        PricingFiveComponent,
        FaqThreeComponent,
        ShortBannerTenComponent,

        //  website builder
        WebsiteBuilderMainComponent,
        HeroBannerTwelveComponent,
        CounterThreeComponent,
        FeatureTwentySixComponent,
        FeatureTwentySevenComponent,
        FeatureTwentyEightComponent,
        ShortBannerElevenComponent,

        //  form survey
        FormSurveyMainComponent,
        HeroBannerThirteenComponent,
        FeatureTwentyNineComponent,
        TextBlockTwelveComponent,
        FeatureSliderComponent,
        TextBlockThirteenComponent,
        IntegratedAppsComponent,
        TestimonialTenComponent,
        PricingSixComponent,
        BlogAreaComponent,
        ShortBannerTwelveComponent,

        //  vr landing
        VrLandingMainComponent,
        HeroBannerFourteenComponent,
        FeatureThirtyComponent,
        FeatureThirtyOneComponent,
        CounterFourComponent,
        VideoBoxTwoComponent,
        FeatureThirtyTwoComponent,
        TestimonialElevenComponent,
        FeatureThirtyThreeComponent,

        // coming soon
        CoomingSoonComponent,

        //  portfolio v1
        PortfolioV1MainComponent,
        PortfolioHeroComponent,
        PortfolioV1AreaComponent,
        ImagePopupComponent,

        // portfolio v2
        PortfolioV2MainComponent,
        PortfolioHeroTwoComponent,
        PortfolioV2AreaComponent,

        // portfolio v3
        PortfolioV3MainComponent,
        PortfolioHeroThreeComponent,
        PortfolioV3AreaComponent,

        // portfolio v3
        PortfolioV4MainComponent,
        PortfolioHeroFourComponent,
        PortfolioV4AreaComponent,

        // portfolio v5
        PortfolioV5MainComponent,
        PortfolioHeroFiveComponent,
        PortfolioV5AreaComponent,

        // portfolio-details
        PortfolioDetailsMainComponent,
        PortfolioDetailsAreaComponent,

        // dynamic details
        DynamicPDetailsComponent,

        // about us cs
        AboutUsCsMainComponent,
        AboutHeroComponent,
        TextBlockFourteenComponent,
        AboutCounterComponent,
        TextBlockFifteenComponent,
        FeatureThirtyFourComponent,
        AboutTeamComponent,

        // about us event
        AboutUsEventMainComponent,
        TextBlockSixteenComponent,
        AboutCounterTwoComponent,
        AboutTeamTwoComponent,
        FeatureBlogComponent,

        // about management
        AboutManagementMainComponent,
        AboutHeroThreeComponent,
        TextBlockSeventeenComponent,
        AboutCounterThreeComponent,
        TextBlockEighteenComponent,
        TextBlockNineteenComponent,
        AboutTeamThreeComponent,
        AboutBlogAreaComponent,

        //  about doc
        AboutUsDocMainComponent,
        AboutHeroFourComponent,
        TextBlockTwentyComponent,
        AboutCounterFourComponent,
        AboutTeamFourComponent,
        UseableToolsFiveComponent,
        MapAreaComponent,

        //  team v1
        TeamV1MainComponent,
        TeamV1HeroComponent,
        TeamAreaComponent,
        TeamBannerComponent,

        //  team v2
        TeamV2MainComponent,
        TeamV2HeroComponent,
        TeamBannerTwoComponent,

        // team details
        TeamDetailsComponent,
        DynamicTeamDetailsComponent,

        // pricing cs
        PricingCsMainComponent,
        PricingAreaComponent,
        TextBlockTwentyOneComponent,
        UseableToolsSixComponent,
        PricingFaqComponent,

        // pricing event
        PricingEventMainComponent,
        PricingAreaTwoComponent,
        PricingFaqTwoComponent,

        // pricing management
        PricingManagementMainComponent,
        PricingAreaThreeComponent,
        PricingCounterComponent,
        TextBlockTwentyTwoComponent,

        // contact us cs
        ContactUsCsMainComponent,
        ContactHeroComponent,
        ContactStyleComponent,

        // contact us event
        ContactUsEventComponent,

        // contact us management
        ContactUsManagementComponent,

        // contact us doc
        ContactUsDocComponent,

        // services-v1
        ServicesV1Component,
        // services-v2
        ServicesV2Component,
        // services v3
        ServicesV3Component,
        // services v4
        ServicesV4Component,
        // service details
        ServiceDetailsComponent,
        // dynamic service details
        DynamicServiceDetailsComponent,
        // solution management
        SolutionManagementComponent,
        // product-cs
        ProductCsComponent,
        // feature cs
        FeatureCsComponent,
        // FaqPageComponent
        FaqPageComponent,
        FaqHeroAreaComponent,
        // faq details
        FaqDetailsComponent,
        // dynamic faqs
        DynamicFaqDetailsComponent,
        // terms condition
        TermsConditionComponent,
        // LoginPageComponent
        LoginPageComponent,
        // register
        RegisterPageComponent,
        // error page
        ErrorPageComponent,
        // blog v1
        BlogV1Component,
        BlogHeroComponent,
        // blog v2
        BlogV2Component,
        BlogSidebarComponent,
        // blog v3
        BlogV3Component,
        // blog v4
        BlogV4Component,
        // blog details
        BlogDetailsComponent,
        DynamicBlogDetailsComponent,
        // doc-fullwidth
        DocFullwidthComponent,
        DocAreaComponent,
        // doc-fullwidth banner
        DocFullwidthBannerComponent,
        // doc box
        DocBoxComponent,
        DocBoxAreaComponent,
        // doc box banner
        DocBoxBannerComponent,
        // changelog
        ChangelogComponent,
    ],

    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DeskiModule {}

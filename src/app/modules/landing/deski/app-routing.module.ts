import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { HomeMainComponent } from './Deski/home/home-main/home-main.component';
import { EventOrganizerMainComponent } from './Deski/event-organizer/event-organizer-main/event-organizer-main.component';
import { DocLandingMainComponent } from './Deski/doc-landing/doc-landing-main/doc-landing-main.component';
import { CustomerSupportMainComponent } from './Deski/customer-support/customer-support-main/customer-support-main.component';
import { ProductLandingMainComponent } from './Deski/product-landing/product-landing-main/product-landing-main.component';
import { ProductLandingDarkMainComponent } from './Deski/product-landing-dark/product-landing-dark-main/product-landing-dark-main.component';
import { NoteTakingMainComponent } from './Deski/note-taking/note-taking-main/note-taking-main.component';
import { VideoEditorMainComponent } from './Deski/video-editor/video-editor-main/video-editor-main.component';
import { AppointmentSchedulingMainComponent } from './Deski/appointment-scheduling/appointment-scheduling-main/appointment-scheduling-main.component';
import { MobileAppMainComponent } from './Deski/mobile-app/mobile-app-main/mobile-app-main.component';
import { DocSignatureMainComponent } from './Deski/doc-signature/doc-signature-main/doc-signature-main.component';
import { WebsiteBuilderMainComponent } from './Deski/website-builder/website-builder-main/website-builder-main.component';
import { FormSurveyMainComponent } from './Deski/form-survey/form-survey-main/form-survey-main.component';
import { VrLandingMainComponent } from './Deski/vr-landing/vr-landing-main/vr-landing-main.component';
import { CoomingSoonComponent } from './Deski/cooming-soon/cooming-soon.component';
import { PortfolioV1MainComponent } from './Deski/portfolio-v1/portfolio-v1-main/portfolio-v1-main.component';
import { PortfolioV2MainComponent } from './Deski/portfolio-v2/portfolio-v2-main/portfolio-v2-main.component';
import { PortfolioV3MainComponent } from './Deski/portfolio-v3/portfolio-v3-main/portfolio-v3-main.component';
import { PortfolioV4MainComponent } from './Deski/portfolio-v4/portfolio-v4-main/portfolio-v4-main.component';
import { PortfolioV5MainComponent } from './Deski/portfolio-v5/portfolio-v5-main/portfolio-v5-main.component';
import { PortfolioDetailsMainComponent } from './Deski/portfolio-details/portfolio-details-main/portfolio-details-main.component';
import { DynamicPDetailsComponent } from './Deski/dynamic-p-details/dynamic-p-details.component';
import { AboutUsCsMainComponent } from './Deski/about-us-cs/about-us-cs-main/about-us-cs-main.component';
import { AboutUsEventMainComponent } from './Deski/about-us-event/about-us-event-main/about-us-event-main.component';
import { AboutManagementMainComponent } from './Deski/about-us-management/about-management-main/about-management-main.component';
import { AboutUsDocMainComponent } from './Deski/about-us-doc/about-us-doc-main/about-us-doc-main.component';
import { TeamV1MainComponent } from './Deski/team-v1/team-v1-main/team-v1-main.component';
import { TeamV2MainComponent } from './Deski/team-v2/team-v2-main/team-v2-main.component';
import { TeamDetailsComponent } from './Deski/team-details/team-details.component';
import { DynamicTeamDetailsComponent } from './Deski/dynamic-team-details/dynamic-team-details.component';
import { PricingCsMainComponent } from './Deski/pricing-cs/pricing-cs-main/pricing-cs-main.component';
import { PricingEventMainComponent } from './Deski/pricing-event/pricing-event-main/pricing-event-main.component';
import { PricingManagementMainComponent } from './Deski/pricing-management/pricing-management-main/pricing-management-main.component';
import { ContactUsCsMainComponent } from './Deski/contact-us-cs/contact-us-cs-main/contact-us-cs-main.component';
import { ContactUsEventComponent } from './Deski/contact-us-event/contact-us-event.component';
import { ContactUsManagementComponent } from './Deski/contact-us-management/contact-us-management.component';
import { ContactUsDocComponent } from './Deski/contact-us-doc/contact-us-doc.component';
import { ServicesV1Component } from './Deski/services-v1/services-v1.component';
import { ServicesV2Component } from './Deski/services-v2/services-v2.component';
import { ServicesV3Component } from './Deski/services-v3/services-v3.component';
import { ServicesV4Component } from './Deski/services-v4/services-v4.component';
import { ServiceDetailsComponent } from './Deski/service-details/service-details.component';
import { DynamicServiceDetailsComponent } from './Deski/dynamic-service-details/dynamic-service-details.component';
import { SolutionManagementComponent } from './Deski/solution-management/solution-management.component';
import { ProductCsComponent } from './Deski/product-cs/product-cs.component';
import { FeatureCsComponent } from './Deski/feature-cs/feature-cs.component';
import { FaqPageComponent } from './Deski/faq-page/faq-page.component';
import { FaqDetailsComponent } from './Deski/faq-details/faq-details.component';
import { DynamicFaqDetailsComponent } from './Deski/dynamic-faq-details/dynamic-faq-details.component';
import { TermsConditionComponent } from './Deski/terms-condition/terms-condition.component';
import { LoginPageComponent } from './Deski/login-page/login-page.component';
import { RegisterPageComponent } from './Deski/register-page/register-page.component';
import { ErrorPageComponent } from './Deski/error-page/error-page.component';
import { BlogV1Component } from './Deski/blog-v1/blog-v1.component';
import { BlogV2Component } from './Deski/blog-v2/blog-v2.component';
import { BlogV3Component } from './Deski/blog-v3/blog-v3.component';
import { BlogV4Component } from './Deski/blog-v4/blog-v4.component';
import { BlogDetailsComponent } from './Deski/blog-details/blog-details.component';
import { DynamicBlogDetailsComponent } from './Deski/dynamic-blog-details/dynamic-blog-details.component';
import { DocFullwidthComponent } from './Deski/doc-fullwidth/doc-fullwidth.component';
import { DocFullwidthBannerComponent } from './Deski/doc-fullwidth-banner/doc-fullwidth-banner.component';
import { DocBoxComponent } from './Deski/doc-box/doc-box.component';
import { DocBoxBannerComponent } from './Deski/doc-box-banner/doc-box-banner.component';
import { ChangelogComponent } from './Deski/changelog/changelog.component';
import { AuthSignInComponent } from 'app/modules/auth/sign-in/sign-in.component';
import { AuthLandingPageComponent } from 'app/modules/auth/landing-page/landing-page.component';
import { HeroBannerTwelveComponent } from './Deski/website-builder/hero-banner-twelve/hero-banner-twelve.component';
import { TestimonialSevenComponent } from './Deski/video-editor/testimonial-seven/testimonial-seven.component';
import { LayoutComponent } from 'app/layout/layout.component';
// import { AuthLandingPageComponent } from 'app/modules/auth/landing-pge/landing-page.component';

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
};

export const routesLandingPage: Routes = [
    {
        path: '', component: WebsiteBuilderMainComponent ,
        data:{
            layout:'empty'
        },
        children :[
            {
                path:'' ,
                component:HeroBannerTwelveComponent
            }   ,
            {
                path:'empty',
                component:TestimonialSevenComponent
            }
    ]
    },

    { path: 'landing-page',
     component: LayoutComponent,

     data:{
        layout:'empty'
    },
    children :[
        {
            path:'' ,
            component:AuthLandingPageComponent
        }   ,

]


    },
    // {
    //     path: 'sign-in',
    //     loadChildren: () =>
    //         import('app/modules/auth/sign-in/sign-in.routes'),
    // },


    { path: 'event-organizer', component: EventOrganizerMainComponent },
    { path: 'doc-landing', component: DocLandingMainComponent },
    { path: 'customer-support', component: CustomerSupportMainComponent },
    { path: 'product-landing', component: ProductLandingMainComponent },
    {
        path: 'product-landing-dark',
        component: ProductLandingDarkMainComponent,
    },
    { path: 'note-taking', component: NoteTakingMainComponent },
    { path: 'video-editor', component: VideoEditorMainComponent },
    {
        path: 'appointment-scheduling',
        component: AppointmentSchedulingMainComponent,
    },
    { path: 'mobile-app', component: MobileAppMainComponent },
    { path: 'doc-signature', component: DocSignatureMainComponent },
    { path: 'website-builder', component: WebsiteBuilderMainComponent },
    { path: 'form-survey', component: FormSurveyMainComponent },
    { path: 'vr-landing', component: VrLandingMainComponent },
    { path: 'coming-soon', component: CoomingSoonComponent },
    { path: 'portfolio-v1', component: PortfolioV1MainComponent },
    { path: 'portfolio-v2', component: PortfolioV2MainComponent },
    { path: 'portfolio-v3', component: PortfolioV3MainComponent },
    { path: 'portfolio-v4', component: PortfolioV4MainComponent },
    { path: 'portfolio-v5', component: PortfolioV5MainComponent },
    { path: 'portfolio-details', component: PortfolioDetailsMainComponent },
    { path: 'portfolio-details/:id', component: DynamicPDetailsComponent },
    { path: 'about-us-cs', component: AboutUsCsMainComponent },
    { path: 'about-us-event', component: AboutUsEventMainComponent },
    { path: 'about-us-management', component: AboutManagementMainComponent },
    { path: 'about-us-doc', component: AboutUsDocMainComponent },
    { path: 'team-v1', component: TeamV1MainComponent },
    { path: 'team-v2', component: TeamV2MainComponent },
    { path: 'team-details', component: TeamDetailsComponent },
    { path: 'team-details/:id', component: DynamicTeamDetailsComponent },
    { path: 'pricing-cs', component: PricingCsMainComponent },
    { path: 'pricing-event', component: PricingEventMainComponent },
    { path: 'pricing-management', component: PricingManagementMainComponent },
    { path: 'contact-us-cs', component: ContactUsCsMainComponent },
    { path: 'contact-us-event', component: ContactUsEventComponent },
    { path: 'contact-us-management', component: ContactUsManagementComponent },
    { path: 'contact-us-doc', component: ContactUsDocComponent },
    { path: 'services-v1', component: ServicesV1Component },
    { path: 'services-v2', component: ServicesV2Component },
    { path: 'services-v3', component: ServicesV3Component },
    { path: 'services-v4', component: ServicesV4Component },
    { path: 'service-details', component: ServiceDetailsComponent },
    { path: 'service-details/:id', component: DynamicServiceDetailsComponent },
    { path: 'solution-management', component: SolutionManagementComponent },
    { path: 'product-cs', component: ProductCsComponent },
    { path: 'feature-cs', component: FeatureCsComponent },
    { path: 'faq', component: FaqPageComponent },
    { path: 'faq-details', component: FaqDetailsComponent },
    { path: 'faq-details/:id', component: DynamicFaqDetailsComponent },
    { path: 'terms-condition', component: TermsConditionComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'blog-v1', component: BlogV1Component },
    { path: 'blog-v2', component: BlogV2Component },
    { path: 'blog-v3', component: BlogV3Component },
    { path: 'blog-v4', component: BlogV4Component },
    { path: 'blog-details', component: BlogDetailsComponent },
    { path: 'blog-details/:id', component: DynamicBlogDetailsComponent },
    { path: 'doc-fullwidth', component: DocFullwidthComponent },
    { path: 'doc-fullwidth-banner', component: DocFullwidthBannerComponent },
    { path: 'doc-box', component: DocBoxComponent },
    { path: 'doc-box-banner', component: DocBoxBannerComponent },
    { path: 'changelog', component: ChangelogComponent },

    { path: '404', component: ErrorPageComponent },
    { path: '**', pathMatch: 'full', component: ErrorPageComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routesLandingPage)],
    exports: [RouterModule],
})
export class AppRoutingModule {

}

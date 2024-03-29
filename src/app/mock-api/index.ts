import { AcademyMockApi } from 'app/mock-api/apps/academy/api';
import { WealthEvaluationMockApi } from 'app/mock-api/wealth-evaluation/api';
import { IndividualsMockApi } from 'app/mock-api/individual/api';
import { ECommerceInventoryMockApi } from 'app/mock-api/apps/ecommerce/inventory/api';
import { FileManagerMockApi } from 'app/mock-api/apps/file-manager/api';
import { HelpCenterMockApi } from 'app/mock-api/apps/help-center/api';
import { MailboxMockApi } from 'app/mock-api/apps/mailbox/api';
import { NotesMockApi } from 'app/mock-api/apps/notes/api';
import { ScrumboardMockApi } from 'app/mock-api/apps/scrumboard/api';
import { TasksMockApi } from 'app/mock-api/apps/tasks/api';
import { AuthMockApi } from 'app/mock-api/common/auth/api';
import { MessagesMockApi } from 'app/mock-api/common/messages/api';
import { NavigationMockApi } from 'app/mock-api/common/navigation/api';
import { NotificationsMockApi } from 'app/mock-api/common/notifications/api';
import { SearchMockApi } from 'app/mock-api/common/search/api';
import { ShortcutsMockApi } from 'app/mock-api/common/shortcuts/api';
import { UserMockApi } from 'app/mock-api/common/user/api';
import { AnalyticsMockApi } from 'app/mock-api/dashboards/analytics/api';
import { CryptoMockApi } from 'app/mock-api/dashboards/crypto/api';
import { FinanceMockApi } from 'app/mock-api/dashboards/finance/api';
import { ProjectMockApi } from 'app/mock-api/dashboards/project/api';
import { ActivitiesMockApi } from 'app/mock-api/pages/activities/api';
import { IconsMockApi } from 'app/mock-api/ui/icons/api';
import { BequestManagementMockApi } from './bequest-management/api';
import { DebtManagementMockApi } from './debt-management/api';
import { FamilyTreeMockApi } from './famliy-tree/api';
import { FamilyMembersMockApi } from './family-members/api';
import { TangibleWealthMockApi } from './wealth-management/tangible-wealth/api';
import { CommercialRealEstateMockApi } from './wealth-management/commercial-real-estate/api';
import { BeneficiariesMockApi } from './beneficiaries/api';
import {  EndowmentsMockApi } from './wealth-management/endowment/api';
import { MixedUsePropertiesMockApi } from './wealth-management/mixed-use-properties/api';
import { InsurancesMockApi } from './insurance/api';
import { AddEndowmentsMockApi } from './wealth-management/endowment/addEndowment/api';
import { checkboxesMockApi } from './checkboxes/api';
import { TypeBequestMockApi } from './type-bequest/api';
import { WealthsMockApi } from './wealth-management/wealth/api';

export const mockApiServices = [
    AcademyMockApi,
    ActivitiesMockApi,
    AnalyticsMockApi,
    AuthMockApi,
    WealthEvaluationMockApi,
    IndividualsMockApi,
    CryptoMockApi,
    ECommerceInventoryMockApi,
    FileManagerMockApi,
    FinanceMockApi,
    HelpCenterMockApi,
    IconsMockApi,
    MailboxMockApi,
    MessagesMockApi,
    NavigationMockApi,
    NotesMockApi,
    NotificationsMockApi,
    ProjectMockApi,
    SearchMockApi,
    ScrumboardMockApi,
    ShortcutsMockApi,
    TasksMockApi,
    UserMockApi,
    BequestManagementMockApi,
    DebtManagementMockApi,
    FamilyTreeMockApi,
    FamilyMembersMockApi,
    TangibleWealthMockApi,
    CommercialRealEstateMockApi,
    BeneficiariesMockApi,
    EndowmentsMockApi,
    MixedUsePropertiesMockApi ,
    InsurancesMockApi,
    AddEndowmentsMockApi,
    checkboxesMockApi,
    TypeBequestMockApi,
    WealthsMockApi
];

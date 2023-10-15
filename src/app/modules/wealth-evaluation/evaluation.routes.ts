import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Router,
    RouterStateSnapshot,
    Routes,
} from '@angular/router';
import { EvaluationComponent } from 'app/modules/wealth-evaluation/evaluation.component';
import { EvaluationService } from 'app/modules/wealth-evaluation/evaluation.service';
import { EvaluationsComponent } from 'app/modules/wealth-evaluation/evaluations/evaluations.component';
import { ConversationComponent } from 'app/modules/wealth-evaluation/conversation/conversation.component';
import { EmptyEvaluationComponent } from 'app/modules/wealth-evaluation/empty-evaluation/empty-evaluation.component';
import { catchError, throwError } from 'rxjs';

/**
 * Conversation resolver
 *
 * @param route
 * @param state
 */
const conversationResolver = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const evaluationService = inject(EvaluationService);
    const router = inject(Router);

    return evaluationService.getEvaluationById(route.paramMap.get('id')).pipe(
        // Error here means the requested Evaluation is not available
        catchError((error) => {
            // Log the error
            console.error(error);

            // Get the parent url
            const parentUrl = state.url.split('/').slice(0, -1).join('/');

            // Navigate to there
            router.navigateByUrl(parentUrl);

            // Throw an error
            return throwError(error);
        })
    );
};

export default [
    {
        path: '',
        component: EvaluationComponent,
        resolve: {
            Evaluations: () => inject(EvaluationService).getEvaluations(),
            contacts: () => inject(EvaluationService).getContacts(),
            profile: () => inject(EvaluationService).getProfile(),
        },
        children: [
            {
                path: '',
                component: EvaluationsComponent,
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        component: EmptyEvaluationComponent,
                        data: () => inject(EvaluationService).getData(),
                    },
                    {
                        path: ':id',
                        component: ConversationComponent,
                        resolve: {
                            conversation: conversationResolver,
                        },
                    },
                ],
            },
        ],
    },
] as Routes;

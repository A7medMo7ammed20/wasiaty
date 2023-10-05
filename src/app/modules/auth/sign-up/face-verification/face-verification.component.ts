import { Component, OnInit, ViewChild, ViewEncapsulation , ViewChildren , ElementRef , QueryList} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {  RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseCardComponent } from '@fuse/components/card';

@Component({
    selector     : 'auth-face-verification',
    templateUrl  : './face-verification.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations,
    standalone   : true,
    imports      : [RouterLink,FuseCardComponent, MatInputModule, MatButtonModule, MatIconModule],
})
export class AuthFaceVerificationComponent implements OnInit
{

    constructor()
    {
    }
    
    ngOnInit(): void
    {}
}

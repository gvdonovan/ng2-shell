import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/Common';
import { FormsModule }          from '@angular/forms';

import { LoginComponent }       from './index';
import { PagesRoutingModule }   from './pages-routing.module';

@NgModule({
    imports: [        
        CommonModule,
        FormsModule,
        PagesRoutingModule
    ],
    declarations: [ LoginComponent ]
})

export class PagesModule { }

import { NgModule }                               from '@angular/core';
import { AdminComponent }                         from './admin.component';

import { AdminRoutingModule, routedComponents }   from './admin-routing.module';

@NgModule({
    imports: [  
        AdminRoutingModule 
    ],    
    declarations: [ AdminComponent ],    
})
export class AdminModule { }

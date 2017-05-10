import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {postRoutes} from "./post.router";
import {PostlistComponent} from "./postlist/postlist.component";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(postRoutes)
  ],
  declarations: [PostlistComponent]
})
export class PostModule { }

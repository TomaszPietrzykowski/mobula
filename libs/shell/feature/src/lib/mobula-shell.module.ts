import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appShellRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appShellRoutes)],
  exports: [RouterModule],
})
export class MobulaShellModule {}

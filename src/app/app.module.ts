import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { FirstComponent } from './components/first/first.component';
// import { SliderComponent } from './components/slider/slider.component';
// import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/day4/register/register.component';
// import { StudentsComponent } from './components/day4/students/students.component';
// import { PostsComponent } from './components/day5/posts/posts.component';
// import { PostDetailsComponent } from './components/day5/post-details/post-details.component';
// import { AboutComponent } from './components/day5/about/about.component';
import { ErrorComponent } from './components/day6/error/error.component';
import { HeaderComponent } from './components/day6/header/header.component';
import { RouterModule, Routes } from '@angular/router';
// import { GetDataService } from './services/get-data.service';
import  { HttpClientModule } from '@angular/common/http'
import { StudentsService } from './services/students.service';
import { StudentItemComponent } from './components/day6/student-item/student-item.component';
import { StudentDetailsComponent } from './components/day6/student-details/student-details.component';
import { AddComponent } from './components/day6/add/add.component';
import { StudentsComponent } from './components/day6/students/students.component';
import { UpdateComponent } from './components/day6/update/update.component';

const routes:Routes = [
  // {path:"",component:PostsComponent},
  // {path:"posts",component:PostsComponent},
  // {path:"posts/:id",component:PostDetailsComponent},
  // {path:"about",component:AboutComponent},
  // {path:"**",component:ErrorComponent},
  {path:"",component:StudentsComponent},
  {path:"students",component:StudentsComponent},
  {path:"students/:id",component:StudentDetailsComponent},
  {path:"add",component:AddComponent},
  {path:"update/:id",component:UpdateComponent},
  {path:"**",component:ErrorComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    // FirstComponent,
    // SliderComponent,
    // HomeComponent,
    // LoginComponent,
    // RegisterComponent,
    // StudentsComponent,
    // PostsComponent,
    // PostDetailsComponent,
    // AboutComponent,
    StudentsComponent,
    ErrorComponent,
    HeaderComponent,
    StudentItemComponent,
    StudentDetailsComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    // GetDataService
    StudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

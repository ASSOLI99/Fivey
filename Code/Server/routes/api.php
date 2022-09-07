<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CodeController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\UserCourseController;
use App\Http\Controllers\VideoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//public
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/categoriesAll', [CategoryController::class, 'allCat']);
Route::get('/categoriesAllRand', [CategoryController::class, 'allCatRand']);
Route::get('/category/dropMenu', [CategoryController::class, 'dropMenu']);
Route::get('/categoriesCards', [CategoryController::class, 'categoriesCards']);
Route::get('/courses/{id}', [CourseController::class, 'show']);
Route::get('/fullCourse/{id}', [CourseController::class, 'fullCourse']);
Route::get('/videos/{id}', [VideoController::class, 'show']);
Route::get('/user/profile/{id}', [AuthController::class, 'showOne']);
Route::get('/user/courses/{id}', [CourseController::class, 'userCourses']);
Route::get('/categories/name/{id}', [CategoryController::class, 'showName']);
Route::get('/courses/category/{id}', [CourseController::class, 'categoryCourses']);
Route::get('/courses/search/{id}', [CourseController::class, 'search']);
    //privet
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    // Route::get('/logout', [AuthController::class,'logout']);
    //section _\|/_ category
    Route::post('/categories/add', [CategoryController::class, 'store']);
    Route::put('/categories/edit/{id}', [CategoryController::class, 'update']);
    Route::delete('/categories/delete/{id}', [CategoryController::class, 'destroy']);
    Route::get('/categories', [CategoryController::class, 'index']);
    Route::get('/categories/{id}', [CategoryController::class, 'show']);

    //section _\|/_ courses
    Route::get('/courses', [CourseController::class, 'index']);
   
    Route::post('/courses/add', [CourseController::class, 'store']);
    Route::put('/courses/edit/{id}', [CourseController::class, 'update']);
    Route::delete('/courses/delete/{id}', [CourseController::class, 'destroy']);
    Route::get('/courses/admin/{id}', [CourseController::class, 'showOne']);
    //section _\|/_ users
    Route::get('/users', [AuthController::class, 'allUsers']);
    Route::post('/users/add', [AuthController::class, 'store']);
    Route::get('/user/admin/{id}', [AuthController::class, 'showOne']);
    Route::delete('/user/delete/{id}', [AuthController::class, 'destroy']);
    Route::get('/user/admin/courses/{id}', [AuthController::class, 'showOneCourses']);
    Route::put('/user/edit/{id}', [AuthController::class, 'update']);
    Route::get('/user/{id}', [AuthController::class, 'show']);
    //section _\|/_ courses
    Route::get('/course/categories', [CategoryController::class, 'catSelect']);
    Route::get('/course/{id}', [CourseController::class, 'userCourses']);
    Route::get('/courses/user/{id}', [CourseController::class, 'userCourse']);
    //section _\|/_ videos
    Route::post('/video/add/{id}', [VideoController::class, 'store']);
    Route::get('/videos/course/{id}', [VideoController::class, 'index']);
    //section _\|/_ user Courses
    Route::get('/userCourses/{id}', [UserCourseController::class, 'show']);
    Route::post('/userCourses/add', [UserCourseController::class, 'store']);
    //section _\|/_ codes
    Route::post('/code/add', [CodeController::class, 'store']);
    Route::put('/code/edit/{id}', [CodeController::class, 'update']);
    Route::get('/code', [CodeController::class, 'index']);
    Route::get('/code/{id}', [CodeController::class, 'show']);
    //section _\|/_ cart
    Route::post('/cart/add', [CartController::class, 'store']);
    Route::get('/cart/{id}', [CartController::class, 'show']);
    Route::delete('/cart/{id}', [CartController::class, 'destroy']);
    Route::get('/cart/length/{id}', [CartController::class, 'length']);

});

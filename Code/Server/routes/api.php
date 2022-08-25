<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CourseController;
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
Route::get('/courses/{id}', [CourseController::class, 'show']);

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
    // Route::get('/courses/{id}', [CourseController::class, 'showOne']);
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

});

<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
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


Route::post('/register', [AuthController::class,'register']);
Route::post('/login', [AuthController::class,'login']);
//privet
Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', [AuthController::class,'user']);
    // Route::get('/logout', [AuthController::class,'logout']);
    Route::post('/categories/add',[CategoryController::class,'store']);
    Route::put('/categories/edit/{id}',[CategoryController::class,'update']);
    Route::delete('/categories/delete/{id}',[CategoryController::class,'delete']);
});
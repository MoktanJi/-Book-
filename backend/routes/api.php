<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\MediaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/getbook',[BookController::class,'getbook']);
Route::get('/getPopular',[BookController::class,'getPopular']);

Route::put('/addbook',[BookController::class,'addbook']);
Route::patch('/editbook',[BookController::class,'editbook']);
Route::post('/searchbook',[BookController::class,'searchbook']);


Route::post('/addbookimage',[MediaController::class,'addBookImage']);
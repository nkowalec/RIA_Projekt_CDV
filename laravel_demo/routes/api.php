<?php

use Illuminate\Http\Request;
use Illuminate\Http\Controllers;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('books', 'BookController');
Route::resource('bookcomments', 'BookCommentsController');
Route::resource('comments', 'CommentController');
Route::resource('publishers', 'PublisherController');
Route::resource('publisherbooks', 'PublisherBooksController');

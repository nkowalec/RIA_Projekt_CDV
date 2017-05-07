<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Book;

class BookCommentsController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Book::findOrFail($id)->comments;
    }
}

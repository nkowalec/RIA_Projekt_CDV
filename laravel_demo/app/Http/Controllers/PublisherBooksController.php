<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Publisher;

class PublisherBooksController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Publisher::findOrFail($id)->books;
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Book;
use App\Publisher;

class BookController extends Controller
{
	public function __construct(){
			$this->middleware('cors');
	}

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		//return env('DB_DATABASE', database_path('database.sqlite'));
        return Book::get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
				$book = new Book();
				$book->id = $request->id;
				$book->title = $request->title;
				$book->authors = $request->authors;
				$publisher = Publisher::findOrFail($request->publisher_id);
				$book->publisher_id = $publisher->id;
				$book->data_wydania = $request->data_wydania;
				$book->ilosc_stron = $request->ilosc_stron;
				$book->save();
        return $book;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
				return Book::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
		 * @param  integer $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $book = Book::findOrFail($request->id);
				$book->title = $request->title;
				$book->authors = $request->authors;
				$publisher = Publisher::findOrFail($request->publisher_id);
				$book->publisher_id = $publisher->id;
				$book->data_wydania = $request->data_wydania;
				$book->ilosc_stron = $request->ilosc_stron;
				$book->save();
				return $book;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
				$book = Book::findOrFail($id);
				$book->comments()->delete();
        return ['status' => $book->delete()];
    }
}

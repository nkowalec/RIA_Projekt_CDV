<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment;
use App;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Comment::get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $book = App\Book::findOrFail($request->book_id);
        $comment = new Comment();
        $comment->book_id = $book->id;
        $comment->nick = $request->nick;
        $comment->comment = $request->comment;
        $comment->note = $request->note;

        $comment->save();
        return $comment;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Comment::findOrFail($id)->book;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      $comment = Comment::findOrFail($id);
      $book = App\Book::findOrFail($request->book_id);
      $comment->book_id = $book->id;
      $comment->nick = $request->nick;
      $comment->comment = $request->comment;
      $comment->note = $request->note;

      $comment->save();
      return $comment;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return ['status' => Comment::destroy($id)];
    }
}

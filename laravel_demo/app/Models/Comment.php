<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['book_id', 'nick', 'comment', 'note'];

    public function book(){
      $this->belongsTo('App\Book');
    }
}

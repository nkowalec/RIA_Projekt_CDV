<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    public $incrementing = false;
    protected $fillable = ['id', 'title', 'authors', 'publisher_id', 'data_wydania', 'ilosc_stron'];

    public function comments(){
      return $this->hasMany('App\Comment');
    }

    public function publisher(){
      return $this->belongsTo('App\Publisher');
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Publisher;

class PublisherController extends Controller
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
        return Publisher::get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $publisher = new Publisher();
        $publisher->name = $request->name;
        $publisher->save();
        return $publisher;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Publisher::findOrFail($id);
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
        $publisher = Publisher::findOrFail($id);
        $publisher->name = $request->name;
        $publisher->save();
        return $publisher;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pub = Publisher::findOrFail($id);
        if($pub->books()->count() > 0)
          return ['status' => false, 'info' => 'Has books'];
        return ['status' => Publisher::destroy($id)];
    }
}

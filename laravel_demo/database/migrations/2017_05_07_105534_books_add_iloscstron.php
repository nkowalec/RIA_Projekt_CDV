<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class BooksAddIloscstron extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('books', function (Blueprint $table){
        $table->integer("ilosc_stron")->default(560);
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('books', function (Blueprint $table){
        $table->dropColumn("ilosc_stron");
      });
    }
}

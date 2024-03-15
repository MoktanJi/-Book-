<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->increments("book_id");
            $table->integer("book_isbn");
            $table->string("book_name");
            $table->string("book_author");
            $table->string("book_genre");
            $table->integer("book_quantity");
            $table->float("book_price");
            $table->string("book_image");
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('table_books');
    }
};

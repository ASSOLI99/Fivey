<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('userName')->unique();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('description')->default("");
            $table->string('image')->nullable();
            $table->tinyInteger("role")->default(1);
            $table->tinyInteger("field")->default("");
            $table->tinyInteger("linkedin")->default("");
            $table->tinyInteger("youtube")->default("");
            $table->tinyInteger("facebook")->default("");
            $table->tinyInteger("phone")->default("");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};

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
            $table->string('userName')->unique()->default('');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('description')->default("");
            $table->string('image')->nullable();
            $table->tinyInteger("role")->default(1);
            $table->string("field")->default("");
            $table->string("linkedin")->default("");
            $table->string("youtube")->default("");
            $table->string("facebook")->default("");
            $table->string("phone")->default("");
            $table->timestamp('email_verified_at')->nullable();
            $table->string('remember_token')->nullable();
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

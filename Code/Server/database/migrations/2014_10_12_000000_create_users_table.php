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
            $table->longText('description')->default("")->nullable();
            $table->string('image')->nullable();
            $table->tinyInteger("role")->default(1);
            $table->string("field")->default("")->nullable();
            $table->string("linkedin")->default("")->nullable();
            $table->string("youtube")->default("")->nullable();
            $table->string("facebook")->default("")->nullable();
            $table->string("phone")->default("")->nullable();
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

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('character_sheets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('c_name');
            $table->integer('c_age');
            $table->integer('c_level');
            $table->string('c_race');
            $table->string('c_origin');
            $table->string('c_class');
            $table->integer('c_str');
            $table->integer('c_dex');
            $table->integer('c_con');
            $table->integer('c_int');
            $table->integer('c_wisd');
            $table->integer('c_char');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('character_sheets');
    }
};


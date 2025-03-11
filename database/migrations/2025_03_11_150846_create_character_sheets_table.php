<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('character_sheets', function (Blueprint $table) {
            $table->id();
            $table->string('c_name');
            $table->integer('c_age');
            $table->integer('c_level');
            $table->string('c_race');
            $table->string('c_origin');
            $table->string('c_class');
            $table->integer('c_str');
            $table->integer('c_dex');
            $table->integer('c_vig');
            $table->integer('c_dis');
            $table->integer('c_know');
            $table->integer('c_cat');
            $table->integer('c_spi');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('character_sheets');
    }
};


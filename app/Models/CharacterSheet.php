<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CharacterSheet extends Model
{
    use HasFactory;

    protected $fillable = [
        'c_name', 'c_age', 'c_level', 'c_race', 'c_origin', 'c_class',
        'c_str', 'c_dex', 'c_vig', 'c_dis', 'c_know', 'c_cat', 'c_spi'
    ];
}


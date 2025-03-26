<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CharacterSheet extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id','c_name', 'c_age', 'c_level', 'c_race', 'c_origin', 'c_class',
        'c_str', 'c_dex', 'c_con', 'c_int', 'c_wisd', 'c_char'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
    
}


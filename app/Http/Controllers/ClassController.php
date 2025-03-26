<?php

namespace App\Http\Controllers;

use App\Models\CharacterClass;
use Illuminate\Http\Request;

class ClassController extends Controller
{
    public function create(Request $request) {
        // Validação dos dados
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'modifiers' => 'required|string|max:255',
        ]);

        $class = CharacterClass::create($validated);

        if ($class):
            return redirect()->route("dashboard")->with('success', 'Classe adicionada no sistema com sucesso!');
        endif;
    }
}

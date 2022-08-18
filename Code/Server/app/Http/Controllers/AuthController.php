<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(Request $request){
        $request->validate([
            'name'=>['required','min:3'],
            'userName'=>['required','min:3',Rule::unique('users','userName')],
            'email'=>['required','regex:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/', Rule::unique('users','email')],
            'password'=>'required|confirmed|min:8|regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$_%^&*-.]).{8,}$/'
        ]);
        $user=User::create([
            'name'=>$request->input('name'),
            'userName'=>$request->input('userName'),
            'email'=>$request->input('email'),
            'password'=>Hash::make( $request->input('password'))
        ]);
        return $user;
    }

    public function login(Request $request){
        $request->validate([
            'email'=>['required','email'],
            'password'=>'required'
        ]);
        if(!Auth::attempt($request->only('email','password'))){
            return response(['message'=>'Invalid credentials'],Response::HTTP_UNAUTHORIZED);
        };
        $user = Auth::user();
        $token = $user->createToken('token')->plainTextToken;
        return response([
            'token'=>$token
        ]);
    }
        public function user(){
        return Auth::user();
    }

}

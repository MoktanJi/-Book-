<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Books;
use Exception;

class BookController extends Controller
{
    public function addbook(Request $resp)
    {
        try
            {
                $books = new Books;
                $books->book_name = $resp['b_name'];
                $books->book_author = $resp['b_author'];
                $books->book_genre = $resp['b_genre'];
                $books->book_popular = $resp['b_popular'];
                $books->book_quantity = $resp['b_quantity'];
                $books->book_price = $resp['b_price'];
                $books->book_image = $resp['b_image'];
                $books->save();
                return response()->json(["response_code"=>200,"book_id"=>"","status_msg"=>"Book added successfully","data"=>$books->orderBy('created_at', 'desc')->first('book_id')],200);
            }
        catch(Exception $e)
            {
                return response()->json(["response_code"=>201,"status_msg"=>$e],201);
            }
    }

    public function getbook(Request $resp)
        {
            $books = new Books;
            // $resp['category']
            $result_count = count($books->where('book_genre',$resp['category'])->get());
            if($result_count>=0)
                {
                    return response()->json($books->where('book_genre',$resp['category'])->get());
                }
            else
                {
                    return response()->json(["response_code"=>404,"status_msg"=>"Book added successfully"],404);
                }
        }

    public function editbook(Request $resp)
        {
            $books = new Books;
            $result_count = count($books->where('book_id',$resp['b_id'])->get());
            if($result_count<=0)
                {
                    return response()->json(["response_code"=>406,"status_msg"=>"Record does not exist with the provided ID"],406);
                }
            
            else
                {
                    try
                        {
                            $books->where('book_id',$resp['b_id'])->update(
                                                                                [
                                                                                    "book_name"=>$resp['b_name'],
                                                                                    "book_author"=>$resp['b_author'],
                                                                                    "book_genre"=>$resp['b_genre'],
                                                                                    "book_quantity"=>$resp['b_quantity'],
                                                                                    "book_price"=>$resp['b_price'],
                                                                                ]
                                                                           );
                            return response()->json(["response_code"=>200,"book_id"=>"","status_msg"=>"Book added successfully"],200);
                        }
                    
                    catch(Exception $e)
                        {
                            return response()->json(["response_code"=>404,"status_msg"=>"Following error encountered:".$e],406);
                        }
                }
        }

    public function searchbook(Request $resp)
        {
            $books = new Books;
            // echo "Timley ".$resp['b_name']." ko barema khojira xau";
            $result_count = count($books->where('book_name','like',$resp['b_name'].'%')->get());
            if($result_count>0)
                {
                    try
                        {
                            return response()->json($books->where('book_name','like',$resp['b_name'].'%')->get());
                            
                        }
                    catch(Exception $e)
                        {
                            return response()->json(["response_code"=>404,"status_msg"=>"Following error encountered:".$e],406);
                        }
                }
            else
                {
                    return response()->json(["response_code"=>404,"status_msg"=>"Book Search result empty"],404);
                }
        }

    public function getPopular(Request $resp)
        {
            $books = new Books;
            $result_count = count($books->where('book_popular',$resp['b_popular'])->get());
            return response()->json($books->where('book_popular',1)->get());
        }
    
}

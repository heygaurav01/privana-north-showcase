import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow flex items-center justify-center py-20 px-4">
                <div className="max-w-md w-full text-center space-y-6 animate-fade-in">
                    <div className="flex justify-center">
                        <CheckCircle className="w-24 h-24 text-green-500" />
                    </div>
                    <h1 className="text-4xl font-serif font-bold text-gray-900">
                        Thank You!
                    </h1>
                    <p className="text-lg text-gray-600">
                        Your registration has been submitted successfully. Our team will contact you shortly with the best offers.
                    </p>
                    <div className="pt-4">
                        <Link to="/">
                            <Button className="bg-[#1e3a8a] hover:bg-[#172554] text-white font-semibold px-8 py-2">
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ThankYou;

import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Users, 
  Shield, 
  Search, 
  UserPlus, 
  MessageCircle, 
  Star,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Award,
  CheckCircle,
  Globe,
  Filter,
  Menu,
  X,
  Crown,
  Zap,
  TrendingUp,
  UserCheck,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react';

const IslamicMarriageMedia = () => {
  const [currentTab, setCurrentTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    gender: '',
    ageFrom: '',
    ageTo: '',
    location: '',
    education: '',
    profession: '',
    maritalStatus: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Sample biodata for demonstration
  const sampleBiodata = [
    {
      id: 1,
      gender: 'পাত্রী',
      age: 24,
      location: 'ঢাকা, বাংলাদেশ',
      education: 'স্নাতকোত্তর',
      profession: 'শিক্ষক',
      height: "৫'৪\"",
      complexion: 'ফর্সা',
      maritalStatus: 'অবিবাহিত',
      religiousEducation: 'কুরআন ও হাদিস জ্ঞান',
      madhab: 'হানাফি',
      prayer: 'নিয়মিত নামাজি',
      hijab: 'সম্পূর্ণ পর্দাশীল',
      economicStatus: 'মধ্যবিত্ত',
      familyType: 'ইসলামিক পরিবার'
    },
    {
      id: 2,
      gender: 'পাত্র',
      age: 28,
      location: 'চট্টগ্রাম, বাংলাদেশ',
      education: 'স্নাতক',
      profession: 'ইঞ্জিনিয়ার',
      height: "৫'৮\"",
      complexion: 'শ্যামলা',
      maritalStatus: 'অবিবাহিত',
      religiousEducation: 'দাওরা-ই হাদিস',
      madhab: 'হানাফি',
      prayer: 'নিয়মিত নামাজি',
      beard: 'সুন্নতি দাড়ি',
      economicStatus: 'উচ্চ মধ্যবিত্ত',
      familyType: 'দ্বীনদার পরিবার'
    }
  ];

  const stats = {
    totalProfiles: 15420,
    maleProfiles: 7856,
    femaleProfiles: 7564,
    successfulMarriages: 2847,
    premiumMembers: 3421
  };

  const Logo = () => (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Heart className="h-8 w-8 text-emerald-600 fill-current" />
        <div className="absolute -top-1 -right-1 h-3 w-3 bg-amber-400 rounded-full flex items-center justify-center">
          <Star className="h-2 w-2 text-white fill-current" />
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold text-gray-800">IslamicMarriageMediaBD</h1>
        <p className="text-xs text-emerald-600">অর্ধেক দ্বীন পূর্ণের সাথী</p>
      </div>
    </div>
  );

  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Logo />
          
          <div className="hidden md:flex space-x-8">
            {['home', 'search', 'profiles', 'pricing', 'about', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setCurrentTab(tab)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentTab === tab 
                    ? 'bg-emerald-100 text-emerald-700' 
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                {tab === 'home' && 'হোম'}
                {tab === 'search' && 'খুঁজুন'}
                {tab === 'profiles' && 'প্রোফাইল'}
                {tab === 'pricing' && 'প্রিমিয়াম'}
                {tab === 'about' && 'আমাদের সম্পর্কে'}
                {tab === 'contact' && 'যোগাযোগ'}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {!currentUser ? (
              <>
                <button 
                  onClick={() => setCurrentTab('login')}
                  className="px-4 py-2 text-emerald-600 border border-emerald-600 rounded-md hover:bg-emerald-50 transition-colors"
                >
                  লগইন
                </button>
                <button 
                  onClick={() => setCurrentTab('register')}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                >
                  নিবন্ধন
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-emerald-600" />
                </div>
                <span className="text-sm font-medium">{currentUser.name}</span>
              </div>
            )}
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );

  const Hero = () => (
    <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          বাংলাদেশের সর্ববৃহৎ
          <span className="text-emerald-600 block">ইসলামিক ম্যারিজ মিডিয়া</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          দ্বীনদার জীবনসঙ্গী খুঁজুন আল্লাহর রহমতে। বিশ্বস্ত, নিরাপদ এবং সম্পূর্ণ ইসলামিক নীতিমালা অনুসরণে।
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={() => setCurrentTab('register')}
            className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <UserPlus className="inline mr-2" />
            বিনামূল্যে নিবন্ধন করুন
          </button>
          <button 
            onClick={() => setCurrentTab('search')}
            className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition-all"
          >
            <Search className="inline mr-2" />
            বায়োডাটা খুঁজুন
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{value.toLocaleString()}</div>
              <div className="text-sm text-gray-600">
                {key === 'totalProfiles' && 'মোট প্রোফাইল'}
                {key === 'maleProfiles' && 'পাত্রের প্রোফাইল'}
                {key === 'femaleProfiles' && 'পাত্রীর প্রোফাইল'}
                {key === 'successfulMarriages' && 'সফল বিবাহ'}
                {key === 'premiumMembers' && 'প্রিমিয়াম সদস্য'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const SearchSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">আপনার আদর্শ জীবনসঙ্গী খুঁজুন</h2>
        
        <div className="bg-gray-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">আমি খুঁজছি</label>
              <select 
                value={searchFilters.gender}
                onChange={(e) => setSearchFilters({...searchFilters, gender: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">নির্বাচন করুন</option>
                <option value="পাত্র">পাত্র</option>
                <option value="পাত্রী">পাত্রী</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">বয়স (থেকে)</label>
              <select 
                value={searchFilters.ageFrom}
                onChange={(e) => setSearchFilters({...searchFilters, ageFrom: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">নির্বাচন করুন</option>
                {Array.from({length: 30}, (_, i) => 18 + i).map(age => (
                  <option key={age} value={age}>{age} বছর</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">বয়স (পর্যন্ত)</label>
              <select 
                value={searchFilters.ageTo}
                onChange={(e) => setSearchFilters({...searchFilters, ageTo: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">নির্বাচন করুন</option>
                {Array.from({length: 30}, (_, i) => 18 + i).map(age => (
                  <option key={age} value={age}>{age} বছর</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">বর্তমান ঠিকানা</label>
              <select 
                value={searchFilters.location}
                onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">নির্বাচন করুন</option>
                <option value="ঢাকা">ঢাকা</option>
                <option value="চট্টগ্রাম">চট্টগ্রাম</option>
                <option value="সিলেট">সিলেট</option>
                <option value="খুলনা">খুলনা</option>
                <option value="রাজশাহী">রাজশাহী</option>
                <option value="বরিশাল">বরিশাল</option>
                <option value="রংপুর">রংপুর</option>
                <option value="ময়মনসিংহ">ময়মনসিংহ</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">শিক্ষাগত যোগ্যতা</label>
              <select 
                value={searchFilters.education}
                onChange={(e) => setSearchFilters({...searchFilters, education: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">নির্বাচন করুন</option>
                <option value="এসএসসি">এসএসসি</option>
                <option value="এইচএসসি">এইচএসসি</option>
                <option value="স্নাতক">স্নাতক</option>
                <option value="স্নাতকোত্তর">স্নাতকোত্তর</option>
                <option value="পিএইচডি">পিএইচডি</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">পেশা</label>
              <select 
                value={searchFilters.profession}
                onChange={(e) => setSearchFilters({...searchFilters, profession: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">নির্বাচন করুন</option>
                <option value="ডাক্তার">ডাক্তার</option>
                <option value="ইঞ্জিনিয়ার">ইঞ্জিনিয়ার</option>
                <option value="শিক্ষক">শিক্ষক</option>
                <option value="ব্যবসায়ী">ব্যবসায়ী</option>
                <option value="সরকারি চাকরি">সরকারি চাকরি</option>
                <option value="বেসরকারি চাকরি">বেসরকারি চাকরি</option>
              </select>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center">
              <Search className="mr-2" />
              খুঁজুন ({sampleBiodata.length} টি ফলাফল)
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  const ProfileCard = ({ profile }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          profile.gender === 'পাত্র' ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800'
        }`}>
          {profile.gender}
        </span>
        <span className="text-gray-500 text-sm">ID: {profile.id}</span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 text-gray-400 mr-2" />
          <span className="text-sm">{profile.age} বছর</span>
        </div>
        
        <div className="flex items-center">
          <MapPin className="h-4 w-4 text-gray-400 mr-2" />
          <span className="text-sm">{profile.location}</span>
        </div>

        <div className="flex items-center">
          <Award className="h-4 w-4 text-gray-400 mr-2" />
          <span className="text-sm">{profile.education}</span>
        </div>

        <div className="flex items-center">
          <Users className="h-4 w-4 text-gray-400 mr-2" />
          <span className="text-sm">{profile.profession}</span>
        </div>

        <div className="bg-emerald-50 p-3 rounded-lg">
          <div className="text-sm text-emerald-800">
            <strong>দ্বীনি শিক্ষা:</strong> {profile.religiousEducation}
          </div>
          <div className="text-sm text-emerald-800 mt-1">
            <strong>মাযহাব:</strong> {profile.madhab}
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center">
          <Heart className="h-4 w-4 mr-2" />
          আগ্রহ প্রকাশ
        </button>
        <button className="flex-1 border border-emerald-600 text-emerald-600 py-2 px-4 rounded-lg hover:bg-emerald-50 transition-colors flex items-center justify-center">
          <Eye className="h-4 w-4 mr-2" />
          বিস্তারিত
        </button>
      </div>
    </div>
  );

  const PricingSection = () => (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">প্রিমিয়াম সেবা</h2>
        <p className="text-gray-600 text-center mb-12">আরও ভাল সেবা পেতে প্রিমিয়াম প্ল্যান নিন</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4">বেসিক</h3>
            <div className="text-3xl font-bold text-emerald-600 mb-4">বিনামূল্যে</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />প্রোফাইল তৈরি</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />৫টি প্রোফাইল দেখুন</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />বেসিক সার্চ</li>
            </ul>
            <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg">বর্তমান প্ল্যান</button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-emerald-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm">
              জনপ্রিয়
            </div>
            <h3 className="text-xl font-bold mb-4">স্ট্যান্ডার্ড</h3>
            <div className="text-3xl font-bold text-emerald-600 mb-4">৯৯৯ টাকা<span className="text-sm font-normal">/মাস</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />সবকিছু বেসিক এর</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />অসীমিত প্রোফাইল দেখুন</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />এডভান্স সার্চ</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />যোগাযোগের তথ্য</li>
            </ul>
            <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors">
              এখনই শুরু করুন
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4">প্রিমিয়াম</h3>
            <div className="text-3xl font-bold text-emerald-600 mb-4">১৯৯৯ টাকা<span className="text-sm font-normal">/মাস</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />সবকিছু স্ট্যান্ডার্ড এর</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />প্রায়োরিটি সাপোর্ট</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />প্রোফাইল হাইলাইট</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />ম্যাচমেকিং সেবা</li>
            </ul>
            <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors">
              এখনই শুরু করুন
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  const LoginForm = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Logo />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">আপনার অ্যাকাউন্টে লগইন করুন</h2>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ইমেইল/মোবাইল</label>
            <input
              type="text"
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="আপনার ইমেইল বা মোবাইল নাম্বার"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">পাসওয়ার্ড</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="আপনার পাসওয়ার্ড"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded" />
              <label className="ml-2 block text-sm text-gray-900">আমাকে মনে রাখুন</label>
            </div>
            <button type="button" className="text-sm text-emerald-600 hover:text-emerald-500">
              পাসওয়ার্ড ভুলে গেছেন?
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            লগইন করুন
          </button>
          <div className="text-center">
            <span className="text-sm text-gray-600">নতুন সদস্য? </span>
            <button 
              onClick={() => setCurrentTab('register')}
              className="text-sm text-emerald-600 hover:text-emerald-500 font-medium"
            >
              এখানে নিবন্ধন করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const RegisterForm = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <Logo />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">নতুন অ্যাকাউন্ট তৈরি করুন</h2>
          <p className="mt-2 text-sm text-gray-600">বিনামূল্যে আপনার বায়োডাটা তৈরি করুন</p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">আপনি কে? *</label>
              <select className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                <option value="">নির্বাচন করুন</option>
                <option value="নিজের জন্য">নিজের জন্য</option>
                <option value="ছেলের জন্য">ছেলের জন্য</option>
                <option value="মেয়ের জন্য">মেয়ের জন্য</option>
                <option value="ভাইয়ের জন্য">ভাইয়ের জন্য</option>
                <option value="বোনের জন্য">বোনের জন্য</option>
                <option value="আত্মীয়ের জন্য">আত্মীয়ের জন্য</option>
                <option value="বন্ধুর জন্য">বন্ধুর জন্য</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">লিঙ্গ *</label>
              <select className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                <option value="">নির্বাচন করুন</option>
                <option value="পুরুষ">পুরুষ</option>
                <option value="মহিলা">মহিলা</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">নাম *</label>
              <input
                type="text"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="আপনার পূর্ণ নাম"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">মোবাইল নাম্বার *</label>
              <input
                type="tel"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="01XXXXXXXXX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ইমেইল *</label>
              <input
                type="email"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">জন্ম তারিখ *</label>
              <input
                type="date"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">পাসওয়ার্ড *</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">পাসওয়ার্ড নিশ্চিত করুন *</label>
              <input
                type="password"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="পাসওয়ার্ড পুনরায় টাইপ করুন"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded" />
            <label className="ml-2 block text-sm text-gray-900">
              আমি <span className="text-emerald-600">শর্তাবলী</span> এবং <span className="text-emerald-600">গোপনীয়তা নীতি</span> সম্মত
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            নিবন্ধন করুন
          </button>

          <div className="text-center">
            <span className="text-sm text-gray-600">ইতিমধ্যে সদস্য? </span>
            <button 
              onClick={() => setCurrentTab('login')}
              className="text-sm text-emerald-600 hover:text-emerald-500 font-medium"
            >
              এখানে লগইন করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const Features = () => (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">কেন আমাদের নির্বাচন করবেন?</h2>
        <p className="text-gray-600 text-center mb-12">ইসলামিক নীতিমালা অনুসরণে আধুনিক প্রযুক্তির সমন্বয়</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">সম্পূর্ণ নিরাপদ</h3>
            <p className="text-gray-600">আপনার ব্যক্তিগত তথ্য সম্পূর্ণ গোপনীয় এবং নিরাপদ। শুধুমাত্র যাচাইকৃত সদস্যরাই যোগাযোগ করতে পারবেন।</p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">যাচাইকৃত প্রোফাইল</h3>
            <p className="text-gray-600">সকল প্রোফাইল যাচাই করা হয় এবং শুধুমাত্র সত্যিকারের দ্বীনদার ব্যক্তিদের প্রোফাইল গ্রহণ করা হয়।</p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">ইসলামিক নীতিমালা</h3>
            <p className="text-gray-600">কুরআন ও সুন্নাহর আলোকে পরিচালিত। কোন ফটো নেই, শুধুমাত্র প্রয়োজনীয় তথ্যের ভিত্তিতে ম্যাচিং।</p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">বিশ্বব্যাপী সেবা</h3>
            <p className="text-gray-600">বাংলাদেশ এবং বিশ্বের যেকোনো প্রান্তে থাকা বাংলাদেশি মুসলিমদের জন্য বিশেষ সেবা।</p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">দ্রুত ম্যাচিং</h3>
            <p className="text-gray-600">আর্টিফিশিয়াল ইন্টেলিজেন্স ব্যবহার করে আপনার পছন্দ অনুযায়ী দ্রুত এবং সঠিক ম্যাচিং।</p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCheck className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">২৪/৭ সাপোর্ট</h3>
            <p className="text-gray-600">যেকোনো সমস্যা বা প্রশ্নের জন্য আমাদের দক্ষ কাস্টমার সাপোর্ট টিম সর্বদা প্রস্তুত।</p>
          </div>
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section className="py-16 bg-emerald-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">যোগাযোগ করুন</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">যোগাযোগের তথ্য</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-600 mr-3" />
                <div>
                  <p className="font-medium">ফোন</p>
                  <p className="text-gray-600">+88 01XXXXXXXXX</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-600 mr-3" />
                <div>
                  <p className="font-medium">ইমেইল</p>
                  <p className="text-gray-600">info@islamicmarriagemediabd.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-emerald-600 mr-3" />
                <div>
                  <p className="font-medium">ঠিকানা</p>
                  <p className="text-gray-600">ঢাকা, বাংলাদেশ</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-3">অফিস সময়</h4>
              <p className="text-gray-600">রবিবার - বৃহস্পতিবার: ৯:০০ - ৬:০০</p>
              <p className="text-gray-600">শুক্রবার: ২:৩০ - ৬:০০</p>
              <p className="text-gray-600">শনিবার: বন্ধ</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">মেসেজ পাঠান</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">নাম *</label>
                <input
                  type="text"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="আপনার নাম"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ইমেইল *</label>
                <input
                  type="email"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="আপনার ইমেইল"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">বিষয় *</label>
                <input
                  type="text"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="মেসেজের বিষয়"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">মেসেজ *</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="আপনার মেসেজ লিখুন"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                মেসেজ পাঠান
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-white mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 mb-4">
              বাংলাদেশের সবচেয়ে বিশ্বস্ত ইসলামিক ম্যারিজ মিডিয়া। আল্লাহর রহমতে আপনার জীবনসঙ্গী খুঁজে নিন।
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">দ্রুত লিঙ্ক</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">প্রোফাইল তৈরি করুন</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">বায়োডাটা খুঁজুন</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">প্রিমিয়াম সেবা</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">সফল গল্প</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">সহায়তা</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">সাহায্য কেন্দ্র</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">প্রাইভেসি পলিসি</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ব্যবহারের নিয়ম</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">যোগাযোগ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">আমাদের ফলো করুন</h3>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-emerald-600 transition-colors">
                <span className="text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-emerald-600 transition-colors">
                <span className="text-sm">t</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-emerald-600 transition-colors">
                <span className="text-sm">i</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 IslamicMarriageMediaBD. All rights reserved. Designed with ❤️ for the Muslim Ummah</p>
        </div>
      </div>
    </footer>
  );

  const renderContent = () => {
    switch(currentTab) {
      case 'login':
        return <LoginForm />;
      case 'register':
        return <RegisterForm />;
      case 'search':
        return (
          <>
            <SearchSection />
            <section className="py-16 bg-gray-50">
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8">খোঁজার ফলাফল</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sampleBiodata.map(profile => (
                    <ProfileCard key={profile.id} profile={profile} />
                  ))}
                </div>
              </div>
            </section>
          </>
        );
      case 'profiles':
        return (
          <section className="py-16 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">সকল প্রোফাইল</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleBiodata.map(profile => (
                  <ProfileCard key={profile.id} profile={profile} />
                ))}
              </div>
            </div>
          </section>
        );
      case 'pricing':
        return <PricingSection />;
      case 'about':
        return <Features />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <>
            <Hero />
            <SearchSection />
            <Features />
            <section className="py-16 bg-gray-50">
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">সাম্প্রতিক প্রোফাইল</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sampleBiodata.map(profile => (
                    <ProfileCard key={profile.id} profile={profile} />
                  ))}
                </div>
                <div className="text-center mt-8">
                  <button 
                    onClick={() => setCurrentTab('profiles')}
                    className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    আরও দেখুন
                  </button>
                </div>
              </div>
            </section>
            <PricingSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
          <div className="space-y-2">
            {['home', 'search', 'profiles', 'pricing', 'about', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setCurrentTab(tab);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentTab === tab 
                    ? 'bg-emerald-100 text-emerald-700' 
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                {tab === 'home' && 'হোম'}
                {tab === 'search' && 'খুঁজুন'}
                {tab === 'profiles' && 'প্রোফাইল'}
                {tab === 'pricing' && 'প্রিমিয়াম'}
                {tab === 'about' && 'আমাদের সম্পর্কে'}
                {tab === 'contact' && 'যোগাযোগ'}
              </button>
            ))}
            
            {!currentUser && (
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <button 
                  onClick={() => {
                    setCurrentTab('login');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-emerald-600 border border-emerald-600 rounded-md hover:bg-emerald-50"
                >
                  লগইন
                </button>
                <button 
                  onClick={() => {
                    setCurrentTab('register');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
                >
                  নিবন্ধন
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      
      <main>
        {renderContent()}
      </main>
      
      <Footer />
    </div>
  );
};

export default IslamicMarriageMedia;

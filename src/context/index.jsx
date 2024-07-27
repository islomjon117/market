// Yuklamalar
import { createContext, useContext, useEffect, useState } from "react";

// import api
import { categoryfillterApi } from '../data/category_list';
import { categorytagsApi } from '../data/category_tags';
import { categorybrandApi } from '../data/category_brand';


// Context yaratish
const FilterContext = createContext({});

export const FilterContextProvider = ({ children }) => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [currentPage, setCurrrentPage] = useState(1);
    // fillter side bar open conts
    const [isSidebarOpen, setisSidebarOpen] = useState(false);
    // fillter checkbox const
    const [isBrandOpen, setisBrandOpen] = useState(false);
    const [isTagsOpen, setisTagsOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    // line 3 line 4
    const [productsclass, setProductsclass] = useState('category_product')
    const [productsimgclass, setProductsimgclass] = useState('category_product_img')
    const [line3ImgStyle, setline3ImgStyle] = useState({})
    const [line4ImgStyle, setline4ImgStyle] = useState({})

    const handleLine3Click = () => {
        setProductsclass('category_product2');
        setProductsimgclass('category_product_img_2')
        setline4ImgStyle({ opacity: 0.5, });
        setline3ImgStyle({});
    }

    const handleLine4Click = () => {
        setProductsclass('category_product');
        setProductsimgclass('category_product_img')
        setline3ImgStyle({});
        setline4ImgStyle({});
    }

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const toggleMenu2 = () => {
        setisBrandOpen(!isBrandOpen);
    };

    const toggleTags = () => {
        setisTagsOpen(!isTagsOpen)
    }

    // fillter side bar open
    const heandleFillterClick = () => {
        setisSidebarOpen(!isSidebarOpen)
    }

    const heandleFillterClose = () => {
        setisSidebarOpen(false)
    }

    // API

    const [categorytagsResponse, setcategorytagsResponse] = useState(null)
    useEffect(() => {
        const getCategorytags = async () => {
            const response = await categorytagsApi.getCategorytags()
            setcategorytagsResponse(response)
        }
        getCategorytags();
    }, []);

    // category fillter 
    const [categoryfillterResponse, setcategoryfillterResponse] = useState()
    useEffect(() => {
        const getCategoryList = async () => {
            const response = await categoryfillterApi.getCategoryList();
            setcategoryfillterResponse(response);
        };
        getCategoryList();
    }, []);

    const [categorybrands, setCategorybrands] = useState(null)
    useEffect(() => {
        const getCategorybrand = async () => {
            const response = await categorybrandApi.getCategorybrand()
            setCategorybrands(response);
        }; getCategorybrand()
    }, [])


    // modal function
    const [closeModal, setcloseModal] = useState(true)
    const closemodaltoggle = () => {
        setcloseModal(false)
    }

    const [loginModal, setloginModal] = useState(false)
    const closeloginmodaltoggle = () => {
        setloginModal(true)
    }



    // fillters
    const [fillterBrands, setFillterBrands] = useState([])
    const [tagsFillter, setTagsFillter] = useState([]);

    // fillter category 
    const [selectedCategories, setSelectedCategories] = useState([]);
    const handleCategorySelection = (id) => {
        const selectedIndex = selectedCategories.indexOf(id);
        if (selectedIndex === -1) {
            setSelectedCategories([...selectedCategories, id]);
        } else {
            const newSelectedCategories = [...selectedCategories];
            newSelectedCategories.splice(selectedIndex, 1);
            setSelectedCategories(newSelectedCategories);
        }
    };

    // fillter brand
    const [selectedBrands, setSelectedBrands] = useState([]);
    const handleBrandSelection = (id) => {
        const brandSelectedIndex = selectedBrands.indexOf(id);
        if (brandSelectedIndex === -1) {
            setSelectedBrands([...selectedBrands, id]);
        } else {
            const newSelectedBrand = [...selectedBrands];
            newSelectedBrand.splice(brandSelectedIndex, 1);
            setSelectedBrands(newSelectedBrand);
        }
    };

    // fillter tags
    const [selectedTags, setSelectedTags] = useState([]);
    const handleTagsdSelection = (id) => {
        const tagsSelectedIndex = selectedTags.indexOf(id);
        if (tagsSelectedIndex === -1) {
            setSelectedTags([...selectedTags, id]);
        } else {
            const newSelectedTag = [...selectedTags];
            newSelectedTag.splice(tagsSelectedIndex, 1);
            setTagsFillter(newSelectedTag);
        }
    }

    const handleRemoveCategory = (categoryId) => {
        const newSelectedCategories = selectedCategories.filter(id => id !== categoryId);
        setSelectedCategories(newSelectedCategories);
    };

    const handleRemoveBrand = (brandId) => {
        const newSelectedBrands = selectedBrands.filter(id => id !== brandId);
        setSelectedBrands(newSelectedBrands);
    };

    const handleRemoveTags = (tagId) => {
        const newSelectedTags = selectedTags.filter(id => id !== tagId);
        setSelectedTags(newSelectedTags);
    };

    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleHeartClick = (product) => {
        if (selectedProducts.some(p => p.id === product.id)) {
            setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
        } else {
            setSelectedProducts([...selectedProducts, product,]);
        }

    };

    // clear button
    const handleClearAll = () => {
        setSelectedBrands([]);
        setSelectedCategories([]);
        setSelectedTags([])
    };
    return (
        <FilterContext.Provider
            value={{
                isMenuOpen,
                setMenuOpen,
                toggleMenu,
                currentPage,
                setCurrrentPage,
                isTagsOpen,
                setisTagsOpen,
                isBrandOpen,
                setisBrandOpen,
                isSidebarOpen,
                setisSidebarOpen,
                heandleFillterClose,
                heandleFillterClick,
                toggleTags,
                toggleMenu2,
                categorytagsResponse,
                setcategorytagsResponse,
                categoryfillterResponse,
                setcategoryfillterResponse,
                closemodaltoggle,
                closeModal,
                setcloseModal,
                isClicked,
                setIsClicked,
                handleClick,
                line4ImgStyle,
                setline4ImgStyle,
                line3ImgStyle,
                setline3ImgStyle,
                productsimgclass,
                setProductsimgclass,
                productsclass,
                setProductsclass,
                handleLine4Click,
                handleLine3Click,
                fillterBrands,
                setFillterBrands,
                tagsFillter,
                setTagsFillter,
                selectedCategories,
                setSelectedCategories,
                handleCategorySelection,
                selectedBrands,
                setSelectedBrands,
                handleBrandSelection,
                selectedTags,
                setSelectedTags,
                handleTagsdSelection,
                handleRemoveCategory,
                handleRemoveTags,
                handleRemoveBrand,
                categorybrands,
                setCategorybrands,
                handleClearAll,
                closeloginmodaltoggle,
                loginModal, setloginModal,
                selectedProducts, setSelectedProducts, handleHeartClick
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => useContext(FilterContext);

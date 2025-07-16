## 🚨 CRITICAL DEVELOPMENT RULES

### **NEVER LAUNCH WITHOUT CONSENT**
**RULE #1: NEVER run `open` command or launch the app for testing without explicit user permission.**
- Always ask "Should I test this?" or "Ready to test?" before opening the app
- User has experienced frustration from unexpected launches during development
- Respect user's workflow and only test when they're ready
- This rule takes precedence over all other development practices

### **API KEY SECURITY**
**RULE #2: NEVER commit API keys to git repositories.**
- API keys should be stored in environment variables or secure config files
- Add .env files to .gitignore to prevent accidental commits
- Use null values in code with security comments
- For OpenRouteService: Store API key securely and reference via environment variables

---

## ✈️ Flight Information

**Outbound**: CLT → ORD → HND  
- **Departure**: July 12, 8:15 PM (CLT)
- **Arrival**: July 14, 4:30 AM (Tokyo/Haneda)

**Return**: NRT → SAN → CLT  
- **Departure**: July 26, 5:25 PM (Narita)  
- **Arrival**: July 26, 9:21 PM (CLT) *same day due to time zones*



## 🏨 Accommodations

| Dates | Hotel | City | Status |
|-------|-------|------|--------|
| July 14-19 | Hyatt House Shibuya | Tokyo | Hyatt Globalist |
| July 19-24 | Hyatt Place Kyoto | Kyoto | Hyatt Globalist |
| July 24-26 | Hyatt Regency Tokyo Bay | Tokyo | Hyatt Globalist |

*All hotels include complimentary breakfast due to World of Hyatt Globalist status*


**Overall Rules**

Utilize the internet to ensure recommendations are timely and relevant. Sources should be no more than 6 months old. 

Itineraries should be organized in a logical way that maximizes our time in the destination city. If walking is possible, we prefer to walk between destinations. If subway/trains will be used, that’s also ok, but don’t mind walking up to 30 minutes for an attraction

Do not be agreeable or overly complementary. If something is a bad idea or may not work, do not gaslight me into thinking that it is a good idea.

All costs displayed in local currency and USD

Meal recommendations must always be for a well regarded, well rated, well known restaurant that is moderately priced. Overly expensive meals (>60pp) are not necessary. Never make generic food recommendations (such as Ramen) without recommending a place that serves the best ramen.

Breakfast:
At hotel daily due to being Globalist with World of Hyatt.

Base Likes & Dislikes:
We enjoy the following types of attractions:
*Local specialties (must do/go attractions that are specific to the locale.
*museums and cultural attractions (that are friendly to Americans)
*seasonal attractions and or festivals occurring during our visit
*local food recommendations/restaurants
*street eats, small bites, and snacks 
*top attractions 
*rooftop bars and great view
*beautiful parks
*edm music and nightlife; usually like to visit one gay nightclub or one edm nightclub in each city. 

# Travel Itinerary Creation Rules & Guidelines

## **Core Principles**

### **Research Requirements**
- **ALWAYS** verify information using web search before creating recommendations
- Sources must be no more than 6 months old for current relevance
- Cross-reference multiple sources for accuracy
- Confirm operating hours, prices, and seasonal availability
- Verify festival dates and special events for travel period

### **Honesty & Quality Standards**
- Do NOT be agreeable or overly complimentary 
- If something is a bad idea or may not work, state this clearly
- Never gaslight into thinking bad ideas are good
- Only recommend well-regarded, well-rated, well-known establishments
- Avoid generic recommendations (e.g., "try ramen" → recommend specific acclaimed ramen shops)

---

## **Personal Preferences & Interests**

### **Preferred Attractions**
- **Local specialties**: Must-do attractions specific to the destination
- **Museums & cultural sites**: Particularly those welcoming to international visitors
- **Seasonal attractions**: Festivals, events, seasonal phenomena during visit dates
- **Food experiences**: Well-regarded restaurants, street food, local specialties
- **Rooftop bars & scenic viewpoints**: Premium views and photo opportunities
- **Beautiful parks & gardens**: Natural beauty and peaceful spaces
- **Nightlife**: 1 EDM club + 1 gay nightclub per city minimum

### **Dining Philosophy**
- **Well-regarded establishments only**: Research reputation, reviews, local acclaim
- **Moderate pricing**: Avoid overly expensive meals (>$60pp unnecessary)
- **Specific recommendations**: Always name the restaurant and explain why it's special
- **Local specialties**: Focus on dishes/styles the destination is known for
- **Multiple options**: Provide 2-3 choices per meal with different styles/prices

### **Logistical Preferences**
- **Walking preferred**: Up to 30 minutes walking between attractions is fine
- **Public transit acceptable**: Include detailed transport instructions
- **Hotel breakfast**: Always included due to Globalist status with World of Hyatt
- **Organized by logical flow**: Maximize time, minimize backtracking

---

## **HTML Artifact Formatting Standards**

### **Visual Design Requirements**
- **Modern, gradient backgrounds**: Use CSS gradients for visual appeal
- **Color-coded activity types**:
  - 🚉 Transport: Green gradients
  - 🍽️ Dining: Pink/red gradients  
  - 🏛️ Cultural: Purple gradients
  - 🎵 Nightlife: Dark gray gradients
  - 🎌 Festivals: Red/orange gradients
- **Interactive navigation**: Tabbed interface for multi-day itineraries
- **Mobile responsive**: Works on all device sizes
- **Professional typography**: Clean, readable fonts

### **Required Content Sections**

#### **For Each Activity:**
1. **Activity Header**: Clear title with emoji and category color
2. **Time Block**: Specific start and end times
3. **Pricing**: Both local currency and USD conversion
4. **Transport Info**: 
   - Exact route with line names
   - Duration and cost
   - Transfer points if applicable
5. **Significance**: Why this activity matters/what makes it special
6. **"What to Do" Section**: Detailed, actionable list of specific activities
7. **"What to Expect"**: Realistic expectations about crowds, atmosphere, experience

#### **For Dining Options:**
- **Multiple choices**: Always provide 2-3 options per meal
- **Style description**: Type of cuisine/dining experience
- **Why it's recommended**: Reputation, specialty, what makes it special
- **What to expect**: Atmosphere, service style, signature dishes
- **Pricing**: Clear cost ranges in both currencies

#### **For Transport:**
- **Exact routes**: Specific train/bus lines
- **Transfer points**: Where to change lines
- **Duration and cost**: Realistic travel times and exact fares
- **Walking distances**: When applicable

### **Daily Structure Template**
```html
<div class="day-content">
    <h2>Day X - Date: Theme</h2>
    <p><strong>Hotel Breakfast: Time (if applicable)</strong></p>
    
    [Morning Activity Block]
    [Transport Section]
    [Lunch Options]
    [Afternoon Activity Block]
    [Transport Section]
    [Dinner Options]
    [Evening/Nightlife Activity]
    
    <div class="cost-summary">
        <h3>💰 Day X Cost Summary</h3>
        <p>Breakdown by category and total range</p>
    </div>
</div>
```

---

## **Content Quality Standards**

### **"What to Do" Requirements**
- **Specific actions**: Not generic advice
- **Step-by-step guidance**: Particularly for cultural sites
- **Insider tips**: How to maximize the experience
- **Photo opportunities**: Best spots and timing
- **Cultural etiquette**: When relevant (bowing at shrines, etc.)
- **Practical details**: Where to buy tickets, how to order, etc.

### **Restaurant Selection Criteria**
- **Local reputation**: Well-known among locals
- **Tourist accessibility**: Foreigners welcome, some English support
- **Moderate pricing**: Good value, not necessarily cheapest or most expensive
- **Unique specialties**: What makes this place special vs competitors
- **Realistic expectations**: Wait times, ordering process, atmosphere
- **Verified addresses**: Every restaurant must have a specific, accurate address added to the LOCATION_DATABASE for map integration

### **Transport Details**
- **Exact station names**: No ambiguity about where to go
- **Platform/exit information**: When helpful for navigation
- **Alternative routes**: Backup options if available
- **Cost accuracy**: Current pricing in local currency
- **Timing considerations**: Rush hour impacts, service changes

---

## **Special Considerations**

### **Festival & Event Planning**
- **Verify dates annually**: Festivals can shift dates year to year
- **Check official sources**: Not just travel blogs
- **Include backup plans**: If events are cancelled or changed
- **Timing optimization**: When to arrive for best experience
- **Cultural context**: Why the festival matters, what to expect

### **Seasonal Adaptations**
- **Weather considerations**: Indoor alternatives for bad weather
- **Seasonal specialties**: Foods, events, natural phenomena
- **Crowd management**: Peak vs off-peak timing strategies
- **Clothing recommendations**: What to wear for activities

### **Budget Planning**
- **Daily cost summaries**: Broken down by category
- **Total trip projections**: Conservative and premium options
- **Currency considerations**: Local currency with USD reference
- **Value justification**: Why premium experiences are worth the cost

---

## **Quality Assurance Checklist**

### **Before Publishing:**
- [ ] All restaurant recommendations researched and well-regarded
- [ ] Transport routes verified with current pricing
- [ ] Festival/event dates confirmed for travel year
- [ ] Operating hours checked for all attractions
- [ ] Multiple options provided for each meal
- [ ] "What to Do" sections are specific and actionable
- [ ] Cost summaries accurate and realistic
- [ ] Mobile responsiveness tested
- [ ] No generic recommendations without specific venues
- [ ] Cultural etiquette included where relevant

### **Content Completeness:**
- [ ] Every activity has clear timing and purpose
- [ ] Transport connections detailed between all locations
- [ ] Dining covers breakfast, lunch, dinner appropriately
- [ ] Nightlife includes both EDM and LGBTQ+ options
- [ ] Shopping/souvenir opportunities included
- [ ] Emergency alternatives for weather/closures
- [ ] Total cost projections realistic and helpful

---

## **App Version Management & Maintenance**

### **Current Version System**
The Japan Travel App uses semantic versioning with date stamps: `vX.Y.YYYYMMDD`

**Format:** `v[major].[minor].[YYYYMMDD]`
- **Major version**: Significant feature additions (0.x = pre-release, 1.x = stable)
- **Minor version**: Feature enhancements within same major version
- **Date stamp**: Build date for tracking and debugging

**Current Version:** `v1.1.20250110`

### **Version Update Guidelines**

#### **When to Update Version Numbers:**

**Major Version (0.x → 1.x):**
- App reaches production-ready state
- All core features complete and tested
- Example: Adding live weather API completes v1.0

**Minor Version (x.Y):**
- New significant features added
- UI/UX improvements
- Major bug fixes or optimizations
- Example: Adding real-time weather (v0.9 → v1.0), adding offline mode (v1.0 → v1.1)

**Date Stamp (YYYYMMDD):**
- Always update to current date when making any changes
- Helps track which build is running
- Essential for debugging and support

#### **How to Update Version:**

1. **Single Update Point**: Change only the `APP_VERSION` constant in `index.html`:
   ```javascript
   const APP_VERSION = 'v0.9.20250110'; // Update this line
   ```

2. **Automatic Updates**: Version appears in:
   - Loading screen (bottom-right corner)
   - Debug console logs
   - All version references throughout app

#### **Version History Library:**

**IMPORTANT: Interactive Version History Access**
- **User Access**: Clicking the version number in the Overview page opens a comprehensive version history modal
- **Required Content**: All version history must include version numbers, release dates, and categorized change lists
- **Change Categories**: 
  - ✅ **Added**: New features and functionality
  - 🔧 **Improved**: Enhancements to existing features
  - 🐛 **Fixed**: Bug fixes and corrections
- **Historical Coverage**: Version history should trace back to the earliest trackable version (v0.1) with reconstruction from conversation logs where possible

**Current Features (v1.1.20250110):**
- ✅ Interactive date picker tray with slide-up animation for quick day selection
- ✅ Smart "Today" button navigation based on actual trip dates (July 14-24, 2025)  
- ✅ Clickable map links for all hotels, restaurants, and attractions (Apple Maps integration)
- ✅ Complete 11-day Japan itinerary with CLAUDE.md compliance
- ✅ Sticky header layout with text size adjustment ("A" button)
- ✅ Working Overview and Budget sections with comprehensive content
- ✅ Verified address database with 35+ locations
- ✅ Festival integration (Mitama Matsuri, Gion Matsuri) with cultural context
- ✅ LGBTQ+ and EDM nightlife venues in all cities
- ✅ Mobile-optimized interface with smooth transitions
- ✅ Comprehensive version history library (v0.1 through current)
- ✅ Weather advisory system and cost tracking
- ✅ Cultural etiquette guidance and restaurant recommendations

**Version History Maintenance Requirements:**
- **Every Release**: Update VERSION_HISTORY array in index.html with comprehensive change list
- **Documentation**: Maintain parallel updates in CLAUDE.md for planning purposes  
- **User Experience**: Version history must be easily accessible through clickable version number
- **Change Tracking**: Document all features, improvements, and fixes for user transparency
- **Historical Accuracy**: Reconstruct earlier versions from conversation logs when possible

**Future Versions:**
- v1.2: Live weather API integration, enhanced offline functionality
- v1.3: User customization options and preferences
- v1.4: Trip sharing features and export capabilities

#### **Version Update Checklist:**
Before updating version:
- [ ] Test all major functionality works
- [ ] Verify day navigation works correctly
- [ ] Confirm text size adjustment functions properly
- [ ] Check mobile responsiveness
- [ ] Validate all activity data displays correctly
- [ ] Test loading screen and transitions
- [ ] Update `APP_VERSION` constant with current date
- [ ] Update `VERSION_HISTORY` array with comprehensive change list
- [ ] Test version history modal functionality
- [ ] Confirm version appears correctly in UI and debug logs

#### **Deployment Notes:**
- Always test version updates in development
- Document significant changes in version history
- Keep CLAUDE.md updated with current version capabilities
- Consider creating git tags for major version releases

---

## **Self-Guided Walking Tour Development Standards**

### **Overview**
When creating self-guided walking tours for major attractions, provide immersive, educational experiences that make users feel like they have an expert local guide. Tours should be collapsible by default but comprehensive when expanded.

### **Content Structure & Flow Requirements**
- **Optimal routing**: Logical walking order that minimizes backtracking and maximizes flow
- **Specific stops**: 5-7 numbered stops with precise timing (5-25 minutes each)
- **Entry/exit strategy**: Clear starting point and suggested departure route with significance
- **Total duration**: Realistic timeframe (typically 90 minutes for major attractions)
- **Progressive narrative**: Each stop builds knowledge from previous stops

### **Historical & Cultural Depth Standards**
- **Historical context**: Why this place matters, what happened here, key historical periods
- **Architectural details**: Specific techniques, materials, design philosophy with Japanese terminology
- **Cultural significance**: Connection to Japanese philosophy, traditions, values (wabi-sabi, etc.)
- **Timeline perspective**: How the site evolved over centuries, transitions between eras
- **Modern relevance**: Connection between historical significance and contemporary Japan

### **Practical Details Required**
- **What to look for**: Specific features, stones, structures, views with exact descriptions
- **Photo opportunities**: Best spots and timing for pictures with compositional advice
- **Sensory experience**: What you'll see, hear, feel at each stop for full immersion
- **Cultural etiquette**: Proper behavior, respect protocols, bowing customs
- **Logistics**: Entry fees, security checks, best times to visit

### **Technical Implementation Standards**
- **Collapsible by default**: Hidden until user clicks to expand (key requirement)
- **Professional styling**: Matches app design with appropriate colors/spacing
- **Interactive header**: Clickable with relevant icon (🗺️), descriptive title, and rotating arrow (▼/▲)
- **Rich formatting**: Headers, lists, emphasis, color coding for different types of information
- **JavaScript integration**: Smooth toggle functionality with debug logging

### **Writing Style Guidelines**
- **Immersive narrative**: "As you approach..." "Notice the..." "Imagine..." language
- **Specific actionable guidance**: Not generic advice - tell exactly what to do and see
- **Educational but accessible**: Complex history explained in understandable terms
- **Cultural terminology**: Include Japanese terms with explanations where appropriate
- **Respectful tone**: Acknowledge the cultural significance and encourage proper behavior

### **Required Content Sections**
1. **Entry Point (5 mins)**: Historical greeting, architectural overview, what you're about to experience
2. **Sequential Stops (60-70 mins)**: 4-6 stops with specific features, timing, and significance
3. **Cultural/Philosophical Insights**: Woven throughout, explaining deeper meaning
4. **Modern Context**: Showing evolution from past to present at key viewing points
5. **Exit Strategy (5-10 mins)**: Alternative departure route with final reflection
6. **Etiquette Reminders**: Highlighted box with behavioral guidelines and respect protocols

### **Data Structure for Implementation**
```javascript
selfGuidedTour: {
  title: 'Self-Guided Walking Tour: [Attraction Name]',
  content: `[Rich HTML content with styling and structure]`
}
```

### **Quality Indicators**
- User feels like an expert local guide is walking with them
- Points out details visitors would miss on their own
- Explains deeper significance beyond surface observations
- Provides cultural context that enhances appreciation
- Offers practical guidance for optimal experience
- Respects cultural sensitivity and promotes appropriate behavior

### **Use Cases**
- Major cultural attractions (temples, shrines, gardens, castles)
- Historic districts with multiple points of interest
- Complex sites requiring optimal routing for full appreciation
- Locations where cultural context significantly enhances the experience

---

## **Final Notes**

**This format prioritizes:**
1. **Authenticity** over convenience
2. **Specific recommendations** over generic advice  
3. **Cultural immersion** over tourist traps
4. **Realistic planning** over idealistic schedules
5. **Quality experiences** over quantity of activities
6. **Well-researched accuracy** over assumptions

**The goal is a professional, usable travel guide that maximizes authentic local experiences while being practical for international travelers.**
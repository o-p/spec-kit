<!--
SYNC IMPACT REPORT - Constitution Update
Version change: Template → 1.0.0
Modified principles: Complete rewrite from template
Added sections: Core Principles (5), Quality Standards, Development Workflow, Governance
Removed sections: Template placeholders
Templates requiring updates:
✅ constitution.md updated
⚠ plan-template.md - may need Constitution Check gates update
⚠ spec-template.md - may need alignment with user story prioritization
⚠ tasks-template.md - may need task categorization updates
Follow-up TODOs: None
-->

# SDD Demo Constitution

## Core Principles

### I. MVP-First Development (NON-NEGOTIABLE)

Start with the simplest possible solution that delivers value. Every feature must be
decomposable into independent, testable slices. No over-engineering or premature
optimization. Build the minimum that proves the concept, then iterate based on
real feedback. YAGNI (You Aren't Gonna Need It) principles strictly enforced.

**Rationale**: Reduces waste, accelerates time-to-market, and ensures resources
focus on proven value rather than speculative features.

### II. Code Quality Standards

Core code and comments MUST be written in English for international collaboration.
Documentation and tests MUST be written in Traditional Chinese (Taiwan) for local
team accessibility. Code must be self-documenting with clear naming conventions.
Comments explain WHY, not WHAT. Functions must be pure when possible, with explicit
side effects clearly documented.

**Rationale**: Consistent language usage reduces cognitive load and enables broader
collaboration while maintaining local team efficiency.

### III. Test-First Development (NON-NEGOTIABLE)

All features follow strict TDD: 測試案例撰寫 → 使用者確認 → 測試失敗 → 實作功能。
Red-Green-Refactor cycle is mandatory. Tests are written in Traditional Chinese
with clear scenario descriptions. Every user story must have independent, automated
acceptance tests before implementation begins.

**Rationale**: Prevents regression, documents behavior, and ensures features meet
actual requirements rather than assumed ones.

### IV. User Experience Consistency

UI/UX patterns must be consistent across all interfaces. Design system components
are mandatory for all user-facing elements. Accessibility standards (WCAG 2.1 AA)
must be met. User interactions must be predictable and follow established patterns.
No custom UI widgets without explicit justification and approval.

**Rationale**: Consistent experiences reduce user cognitive load and improve
adoption rates while reducing development overhead.

### V. Performance Requirements

Response times must meet specified SLAs: <200ms p95 for API calls, <100ms for
UI interactions. Memory usage must be bounded and monitored. Performance
regression tests are mandatory for critical paths. Optimization decisions must
be data-driven with before/after metrics.

**Rationale**: Performance directly impacts user satisfaction and system scalability.

## Quality Standards

**Code Coverage**: Minimum 80% test coverage for all production code. Critical
paths require 95% coverage.

**Code Review**: All code changes require peer review with specific focus on MVP
principles compliance, test coverage, and performance impact.

**Documentation**: Technical documentation in Traditional Chinese, API documentation
in English. All public interfaces must have usage examples.

**Monitoring**: All features must include telemetry for usage tracking and
performance monitoring. Alerts required for SLA violations.

## Development Workflow

**Branch Strategy**: Feature branches with descriptive names. Main branch must
always be deployable.

**Commit Messages**: Follow conventional commits format. Messages in English
with clear scope and description.

**Deployment**: Automated CI/CD pipeline with quality gates. Manual approval
required for production deployments.

**Rollback**: All features must be feature-flagged to enable quick rollback
without code deployment.

## Governance

This constitution supersedes all other development practices. All pull requests
must verify compliance with these principles. Any complexity beyond MVP scope
must be explicitly justified with user value metrics.

**Amendment Process**: Constitution changes require team consensus and version
increment. All amendments must include impact analysis and migration plan.

**Compliance Review**: Monthly constitution compliance reviews with metrics
tracking adherence to principles.

**Enforcement**: Principle violations block deployment. Team leads responsible
for ensuring compliance during code review process.

**Version**: 1.0.0 | **Ratified**: 2025-10-22 | **Last Amended**: 2025-10-22
